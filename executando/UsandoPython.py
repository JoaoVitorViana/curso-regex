import re

texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

pattern9 = re.compile('9')
math1 = re.searc(pattern9, texto)

print "Posições: %s, %s; Valor: %s." % (math1.start(), math1.end(), math1.group(0))

valores = re.findall('[a-f]', texto)
print "Valores: %s" % valores