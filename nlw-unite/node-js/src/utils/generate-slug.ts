export function generateSlug(text: string): string{
    return text
        .normalize("NFD") //normaliza o texto desacoplando acentos
        .replace(/[\u0300-\u036f]/g, "") //remove acentos da string
        .toLowerCase()
        .replace(/[^\w\s-]/g, "") //remove caracteres que não são letras, espaços ou hifens por string cazia
        .replace(/\s+/g, "-") //substitui espaço em branco por traço
}