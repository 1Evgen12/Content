List<Shape> shapes = new List<Shape>() 
{ new Circle(5), new Triangle(2, 2, 2), new Circle(6), new Triangle(2,4,5) };


for (int i = 0; i < shapes.Count; i++)
{
    Console.WriteLine($"Площадь фигуры {shapes[i].GetType()}: {shapes[i].CalculateSquare()}");
}



