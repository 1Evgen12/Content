namespace Calculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string input1, input2, input3;
            Console.Write("Введите количество человек: ");
            input1 = Console.ReadLine();
            Console.Write("Введите счет: ");
            input2= Console.ReadLine();
            Console.Write("Введите процент чаевых: ");
            input3 = Console.ReadLine();
            Console.WriteLine();

            if (int.TryParse(input1, out int n) && 
                double.TryParse(input2, out double bill) && 
                double.TryParse(input3, out double percent)) 
            {
                double tips = Math.Round((percent / 100.0 * bill), 2);
                double total = Math.Round(bill + tips, 2);
                double perPerson = Math.Round(total / n, 2);

                Console.WriteLine($"Чаевые: {tips}");
                Console.WriteLine($"Итого: {total}");
                Console.WriteLine($"С кажого: {perPerson}");                
            }
            else
            {
                Console.WriteLine("Ошибка ввода данных.");
            }
        }
    }
}
