List<Shape> shapes = new List<Shape>() 
{ new Circle(5), new Triangle(1, 1, 2), new Circle(6), new Triangle(2,4,5) };

foreach (Shape shape in shapes)
{
    Console.WriteLine($"Площадь фигуры {shape.GetType()}: {shape.CalculateSquare()}");
}




