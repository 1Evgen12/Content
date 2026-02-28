class Repository 
{
    private Person[] storage;
    private int count;
    private int index = 0;
    public Repository(int count)
    {
        this.count = count;
        this.storage = new Person[this.count];
    }
    public int Index => index;

    public void Append(Person person)
    {
        if(index < count)
        {storage[index] = person;
            index++;
        }
    }   
    public void Print()
    {
        for (int i = 0; i < index; i++)
        {
            Person temp = storage[i];
            Console.WriteLine($"Имя: {temp.Name} возраст: {temp.Age}");
        }
    }
}