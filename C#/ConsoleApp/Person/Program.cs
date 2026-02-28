Person person1 = new Person("Вася", 12);
Person person2 = new Person("Юля", 21);
Person person3 = new Person("Галя", 30);

Repository storage = new Repository(10);
storage.Append(person1);
storage.Append(person2);
storage.Append(person3);



storage.Print();
