const Generator = require('yeoman-generator')
const fs = require('node:fs')
const path = require('node:path')

const filesTmp = [
    'moduleName.module.ts',
    'moduleName.controller.ts',
    'repository.module.ts',
    'schema.ts',
    'use-case.module.ts',
    'dependencies.ts',
    'repository/repository.d.ts',
    'repository/repository.ts',
]

function deleteFolderRecursiveSync(folderPath = '') {
    if (fs.existsSync(folderPath)) {
        fs.readdirSync(folderPath).forEach((file) => {
            const curPath = path.join(folderPath, file)
            if (fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursiveSync(curPath)
            } else {
                fs.unlinkSync(curPath)
            }
        })
        fs.rmdirSync(folderPath)
    }
}

module.exports = class extends Generator {
    async prompting() {
        this.argument('moduleName', { type: String, required: false })
        this.argument('moduleNames', { type: String, required: false })
        this.argument('ModuleName', { type: String, required: false })

        const captureNameValid = /^[A-Za-z]+$/

        this.answers = await this.prompt([{
            type: 'input',
            name: 'moduleName',
            message: 'Name module main:',
            when: () => !this.options.moduleName,
            validate: (moduleName) => captureNameValid.test(moduleName)
        },
        {
            type: 'input',
            name: 'moduleNames',
            message: 'Name module in plural:',
            when: () => !this.options.moduleNames,
            validate: (moduleNames) => captureNameValid.test(moduleNames)
        },
        {
            type: 'input',
            name: 'ModuleName',
            message: 'Name module in capital letter:',
            when: () => !this.options.ModuleName,
            validate: (ModuleName) => captureNameValid.test(ModuleName)
        }
        ])

        if ((this.options.moduleName && !captureNameValid.test(this.options.moduleName)) || (this.options.moduleNames && !captureNameValid.test(this.options.moduleNames)) || (this.options.ModuleName && !captureNameValid.test(this.options.ModuleName))) { throw new Error('Arguments invalid') }

        this.answers.moduleName = this.options.moduleName || this.answers.moduleName
        this.answers.moduleNames = this.options.moduleNames || this.answers.moduleNames
        this.answers.ModuleName = this.options.ModuleName || this.answers.ModuleName
    }

    paths() {
        const { moduleName, moduleNames, ModuleName } = this.answers

        filesTmp.forEach((file) => {
            this.fs.copyTpl(
                this.templatePath(file),
                this.destinationPath(`../app/modules/${this.answers.moduleName.split(' ').join('-')}/${file.replace('moduleName', moduleName).replace('moduleNames', moduleNames).replace('ModuleName', ModuleName)}`), { moduleName, ModuleName, moduleNames }
            )
        })
    }

    end() {
        this.log(`Module "${this.answers.moduleName}" created`)
    }
}
