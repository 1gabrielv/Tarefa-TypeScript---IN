function retornarElemento<T>(array: T[], index: number): T | undefined {
    return array[index];
}

retornarElemento([1, 2, 3], 1);
retornarElemento(["a", "b", "c"], 0);