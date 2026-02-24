namespace Calculator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int n, bill, percent;
            Console.Write("Введите количество человек: ");
            bool nRes = int.TryParse(Console.ReadLine(), out n);
            Console.Write("Введите счет: ");
            bool billRes = int.TryParse(Console.ReadLine(), out bill);
            Console.Write("Введите процент чаевых: ");
            bool percentRes = int.TryParse(Console.ReadLine(), out percent);
            Console.WriteLine();
            if (nRes && billRes && percentRes) {
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
