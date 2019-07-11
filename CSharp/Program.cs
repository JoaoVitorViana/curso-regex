using System;
using System.Text.RegularExpressions;

namespace CSharp
{
	class Program
	{
		static void Main(string[] args)
		{
			var texto = "supermercado superação hiperMERCADO Mercado";	

			var regex = new Regex(@"(?:super)[\wÀ-ú]+", RegexOptions.IgnoreCase);

			var result = regex.Matches(texto);
			foreach (var item in result)
			{
				Console.WriteLine(item);
			}

			//Positivo Lookbehind
			regex = new Regex(@"(?<=super)[\wÀ-ú]+", RegexOptions.IgnoreCase);
			result = regex.Matches(texto);
			foreach (var item in result)
			{
				Console.WriteLine(item);
			}

			//Negativo Lookbehind
			regex = new Regex(@"(?<!super)mercado", RegexOptions.IgnoreCase);
			result = regex.Matches(texto);
			foreach (var item in result)
			{
				Console.WriteLine(item);
			}

			Console.ReadKey();
		}
	}
}