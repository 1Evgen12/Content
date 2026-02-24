using System.Threading.Channels;

namespace Quiz
{
    internal class Program
    {
        static void Main(string[] args)
        {    

            int score = 0;

            string[] answers = ["6", "жир", "звезда", "4 года"];
            string[] questions = ["Сколько будет 2 + 2 * 2? [8, 6, 4, 2]",
                "Что у верблюда в горбу? [вода, мясо, жир, кость]",
                "Солнце - это ... [планета, комета, астероид, звезда]",
                "\"Високосный год бывает раз в ... [4 года, 1 год, 3 года, 5 лет]"
                ];

            for (int i = 0; i < questions.Length; i++)
            {
                string question = questions[i];
                Console.WriteLine(question);
                string answer = Console.ReadLine().ToLower().Trim();
                if (answers[i] == answer)
                {
                    Console.WriteLine("Все верно!");
                    score += 10;
                }
                else
                {
                    Console.WriteLine("Пока не правильно");
                }
            }
            Console.WriteLine("\n----------------------");
            Console.WriteLine($"Вы набрали {score} баллов");

        }
    }
}
