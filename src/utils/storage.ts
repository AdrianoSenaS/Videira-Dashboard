/*Salvar dados no local storage*/
export const saveToLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

/*Pegar dados do local storage*/
export const getFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data):null
}