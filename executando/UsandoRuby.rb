texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
regexNove = Regexp::new('9')
puts regexNove.match(texto)