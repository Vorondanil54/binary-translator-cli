function binaryToText(binary) {
    const cleanBinary = binary.replace(/\s+/g, '') // Removing spaces to process the flat string
    const binaryArray = cleanBinary.match(/.{1,8}/g) // Slicing chunks by 8 symbols

    if (!binaryArray) {
        return '';
    }

    const byteArray = binaryArray.map(bin => parseInt(bin, 2)) // Converting chunks into number

    //Decoding bytes array
    const view = new Uint8Array(byteArray)
    const decoder = new TextDecoder()

    return decoder.decode(view)
}

function textToBinary(text) {
    const encoder = new TextEncoder()
    const view = encoder.encode(text)

    return Array.from(view)
        .map(byte => byte.toString(2).padStart(8, '0'))
        .join(' ')
}

export { binaryToText, textToBinary }