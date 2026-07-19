import * as inquirer from '@inquirer/prompts'

import { binaryToText, textToBinary } from '../src/funcs.js'

const cli = async () => {
    const translationMode = await inquirer.select({
        message: 'Choose the type of translation:',
        choices: [
            {
                name: 'Binary -> Text',
                value: 'binary',
            },
            {
                name: 'Text -> Binary',
                value: 'text'
            },
        ]
    })

    const input = await inquirer.input({
        message: 'Now enter your text',
        validate: (value) => {
            if (!value.trim()) {
                return 'Input field cannot be empty!'
            }

            if (translationMode === 'binary') {
                const binaryValid = /^[01\s]+$/.test(value)

                if (!binaryValid) {
                    return 'Binary must contain only 0 and 1 symbols!'
                }
            }

            return true
        },
    })

    console.log('Translating...')
    switch (translationMode) {
        case 'binary':
            console.log(binaryToText(input))
            break
        case 'text':
            console.log(textToBinary(input))
            break
    }
}

export default cli