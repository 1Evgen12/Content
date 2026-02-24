using System.Threading.Channels;

namespace Quiz
{
    internal class Program
    {
        static void Main(string[] args)
        {    

            int score = 0;
            string answer1 = "6", answer2 = "жир", answer3 = "звезда", answer4 = "4 года";

            Console.WriteLine("Сколько будет 2 + 2 * 2? [8, 6, 4, 2]");
            string question1 = Console.ReadLine();
            Console.WriteLine("Что у верблюда в горбу? [вода, мясо, жир, кость]");
            string question2 = Console.ReadLine();
            Console.WriteLine("Солнце - это ... [планета, rомета, астероид, звезда]");
            string question3 = Console.ReadLine();
            Console.WriteLine("Високосный год бывает раз в ... [4 года, 1 год, 3 года, 5 лет]");
            string question4 = Console.ReadLine();

            if (question1.ToLower() == answer1) score += 10;
            if (question2.ToLower() == answer2) score += 10;
            if (question3.ToLower() == answer3) score += 10;
            if (question4.ToLower() == answer4) score += 10;
            Console.WriteLine("\n----------------------");
            Console.WriteLine($"Вы набрали {score} баллов");

        }
    }
}
