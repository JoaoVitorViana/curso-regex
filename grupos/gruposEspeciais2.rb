texto = 'supermercado superação hiperMERCADO'

pust texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')