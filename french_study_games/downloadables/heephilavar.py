from random import shuffle, choice
sofits = {'פ': 'ף', 'כ': 'ך', 'צ': 'ץ', 'נ': 'ן', 'מ': 'ם'}
def sofitifize_word(word):
    if word[-1] in 'פכצנמ':
        return word[:-1] + sofits[word[-1]]
    else:
        return word

def conjugate_word(pronoun, root):
    if pronoun == 'אני':
        return 'ה{}{}{}תי'.format(root[0], root[1], root[2])
    elif pronoun == 'אתה' or pronoun == 'את':
        return 'ה{}{}{}ת'.format(root[0], root[1], root[2])
    elif pronoun == 'הוא':
        return sofitifize_word('ה{}{}י{}'.format(root[0], root[1], root[2]))
    elif pronoun == 'היא':
        return 'ה{}{}י{}ה'.format(root[0], root[1], root[2])
    elif pronoun == 'אנחנו':
        return 'ה{}{}{}נו'.format(root[0], root[1], root[2])
    elif pronoun == 'אתם':
        return 'ה{}{}{}תם'.format(root[0], root[1], root[2])
    elif pronoun == 'אתן':
        return 'ה{}{}{}תן'.format(root[0], root[1], root[2])
    elif pronoun == 'הם':
        return 'ה{}{}י{}ו'.format(root[0], root[1], root[2])
    elif pronoun == 'הן':
        return 'ה{}{}י{}ו'.format(root[0], root[1], root[2])
pronouns = ['אני', 'אתה', 'את', 'הוא', 'היא', 'אנחנו', 'אתם', 'אתן', 'הם', 'הן']
roots = ('דלק', 'זמנ', 'תחל', 'צחק', 'משכ', 'עתק', 'עבר', 'שפע', 'ספק', 'מלצ')
shuffle(pronouns)
corrects = 0
for pronoun in pronouns:
    root = choice(roots)
    guess = input('{} ({}.) = {} '.format(pronoun, '.'.join(root), pronoun))
    if guess == conjugate_word(pronoun, root):
        print('נכון!')
        corrects += 1
    else:
        print(' '.join((pronoun, conjugate_word(pronoun, root))))
print('קבלת {}/{}! זה ציון {}%!'.format(corrects, len(pronouns), (corrects / len(pronouns)) * 100))
