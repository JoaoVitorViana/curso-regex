package main

import (
	"regexp"
	"fmt"
	"bytes"
)

func main() {
	texto := "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f"

	regex9, _ := regexp.Compile("9")
	fmt.PrintLn(regex9.MatchString(texto))
	fmt.PrintLn(regex9.FindString(texto))
	fmt.PrintLn(regex9.FindStringIndex(texto))

	regexLetras, _ := regexp.Compile("[a-f]")
	fmt.PrintLn(regexLetras.FindAllString(texto, 20));
	fmt.PrintLn(regexLetras.ReplaceAllString(texto, "Achei"))


	resultado := regexLetras.ReplaceAllString([]byte(texto), bytes.ToUpper)
	fmt.PrintLn(string(resultado))
}