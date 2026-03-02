abstract class Shape : IShape
{
    public abstract double CalculateSquare();    
}

class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(double radius)
    {
        Radius = radius;
    }

    //Расчет площади круга по формуле PI*r^2
    public override double CalculateSquare()
    {
        return Math.Round(Math.PI * Math.Pow(Radius, 2), 3);
    }
}
class Triangle : Shape
{
    public double SideA { get; }
    public double SideB { get; }
    public double SideC { get; }
    public Triangle(double sideA, double sideB, double sideC)
    {
        SideA = sideA;
        SideB = sideB;
        SideC = sideC;
    }
    //Проверка, является ли фигура треугольником
    public bool CheckTriangle()
    {
        if (SideA + SideB <= SideC || SideA + SideC <= SideB || SideB + SideC <= SideA)
            return false;
        return true;
    }
    
    //Расчет площади треугольника по формуле Герона:
    public override double CalculateSquare()
    {  
        if (CheckTriangle())
        {
            double p = CalculateSemiPerimeter();
            return Math.Round(Math.Sqrt(p * (p - SideA) * (p - SideB) * (p - SideC)), 3);
        }
        throw new Exception();        
    }

    //Расчет полупериметра для формулы Герона
    private double CalculateSemiPerimeter()
    {
        return (SideA + SideB + SideC) / 2;
    }
}
