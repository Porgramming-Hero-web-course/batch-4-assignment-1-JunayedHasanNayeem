{

    const getProperty = <Object, Key extends keyof Object>(
        objct: Object,
        key: Key
    ): Object[Key] =>  {
        return objct[key];
    }
    
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}