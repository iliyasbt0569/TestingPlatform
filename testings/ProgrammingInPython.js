export const testingName = `Python тілінде бағдарламалау`;
export const testingStr = `
<question1> Python-да "Hello World" шығарудың дұрыс синтаксисі қандай?
<variantright> print(“Hello World”)
<variant> echo“Hello World”
<variant> p(“Hello World”)
<variant> echos(“Hello World”)
<variant> echo(“Hello World”)

<question1> Python кодына пікірлерді қалай енгізуге болады
<variantright> #This is a comment
<variant> //This is a comment
<variant> /*This is s comment*/
<variant> /**This is s comment*/*
<variant> /**This is s comment///

<question1> Қайсысы жарамды айнымалы атау емес
<variantright> my-var
<variant> Myvar
<variant> my_var
<variant> _myvar
<variant> _my

<question1> 5 сандық мәні бар айнымалыны қалай құруға болады?
<variantright> x=5
<variant> x=int(5.5/2)
<variant> x=5/2
<variant> x=1/55
<variant> x=int(1/55)

<question1> Python файлдары үшін қай кеңейтім дұрыс?
<variantright> .py
<variant> .pyth
<variant> .pyt
<variant> .pt
<variant> .ptt

<question1> Өзгермелі саны 2,8 болатын айнымалыны қалай құруға болады?
<variantright> x=float(2.8)
<variant> x=28
<variant> x=28/100
<variant> x=float(2.8*5)
<variant> x=float(2.8*10)

<question1> Python-да айнымалы немесе объект түрін шығару үшін дұрыс синтаксис қандай?
<variantright> print(type(x))
<variant> print(fun(x))
<variant> print(out Of (x))
<variant> print( tru of x )
<variant> print(cas of x)

<question1> Python-да функцияны қалай құруға болады?
<variantright> def myFunction():
<variant> create myFunction():
<variant> function output function ():
<variant> console my function():
<variant> function print

<question1> Мазмұнды консольге шығару үшін Python-да қандай функция бар?
<variantright> print
<variant> echo
<variant> output
<variant> console.log
<variant> delete

<question1> Жолдағы бірінші таңбаны қайтару үшін дұрыс синтаксис қандай?
<variantright> x=”Hello”[0]
<variant> x=sub(“Hello”,0,1)
<variant> x=”Hello”.sub(0,1)
<variant> x=”Hello”.sub(0,9)
<variant> x=”Hello”.sub(0,8)

<question1> Жолдың басында да, соңында да бос орындарды жою үшін қандай әдісті қолдануға болады?
<variantright> strip()
<variant> len()
<variant> trim()
<variant> ptrim()
<variant> pt()

<question1> Жоғарғы регистрдегі жолды қайтару үшін қандай әдісті қолдануға болады?
<variantright> upper()
<variant> upper sase()
<variant> upper base()
<variant> to Upper Zase()
<variant> under Case ()

<question1> Жолдың бөліктерін ауыстыру үшін қандай әдісті қолдануға болады?
<variantright> replace()
<variant> repl()
<variant> replaceString()
<variant> switch
<variant> swit

<question1> Сандарды көбейту үшін қандай оператор қолданылады?
<variantright> *
<variant> %
<variant> X
<variant> #
<variant> /

<question1> Екі мәнді салыстыру үшін қандай операторды қолдануға болады?
<variantright> = =
<variant> =
<variant> < >
<variant> ><
<variant> *

<question1> Бұл жинақтардың қайсысы тізімді анықтайды?
<variantright> [“apple”,”banana”,”cherry”]
<variant> { “apple”,”banana”,”cherry”]}
<variant> { “name”:“apple”,”color”,”name”}
<variant> (“apple”,”banana”,”cherry”)
<variant> (”banana”,”cherry”)

<question1> Бұл жинақтардың қайсысы TUPLE-ді анықтайды?
<variantright> (“apple”,”banana”,”cherry”)
<variant> { “apple”,”banana”,”cherry”]}
<variant> { “name”:“apple”,”color”,”name”}
<variant> [“apple”,”banana”,”cherry”]
<variant> (”banana”,”cherry”)

<question1> Бұл жинақтардың қайсысы SET-ті анықтайды?
<variantright> { “apple”,”banana”,”cherry”}
<variant> [“apple”,”banana”,”cherry”]
<variant> { “name”:“apple”,”color”,”name”}
<variant> (“apple”,”banana”,”cherry”)
<variant> (”banana”,”cherry”)

<question1> Осы жинақтардың қайсысын DICTIONARY анықтайды?
<variantright> { “name”:“apple”,”color”,”name”}
<variant> { “apple”,”banana”,”cherry”]}
<variant> [“apple”,”banana”,”cherry”]
<variant> (“apple”,”banana”,”cherry”)
<variant> (”banana”,”cherry”)

<question1> Қандай коллекция реттелген, өзгертілетін және элементтердің қайталануына мүмкіндік береді?
<variantright> LIST
<variant> SET
<variant> DICTIONARY
<variant> TUPLE
<variant> SETS

<question1> Қай коллекция қайталанатын элементтерге жол бермейді?
<variantright> SET
<variant> TUPLE
<variant> DICTIONARY
<variant> TAB
<variant> COLOR

<question1> Python-да if мәлімдемесін жазуды қалай бастауға болады?
<variantright> if x>y
<variant> if(x>y)
<variant> if x>y then
<variant> if x>y thens
<variant> then x>y if

<question1> Python-да циклды қалай жазуды бастау керек?
<variantright> while x>y:
<variant> x>y while{:
<variant> while(x>y):
<variant> while x>y{:
<variant> x>y{while:

<question1> Python-да цикл жазуды қалай бастау керек?
<variantright> for x in y:
<variant> for each x in y:
<variant> for x>y:
<variant> x>y:for:
<variant> for x>y for:

<question1> Циклды тоқтату үшін қандай оператор қолданылады?
<variantright> break
<variant> exit
<variant> stop
<variant> return
<variant> returns

<question1> Келесі код не береді:print(bool(0), bool(3.14159), bool(-3), bool(1.0+1j))
<variantright> False True True True
<variant> True True False True
<variant> True False True True
<variant> False True False True
<variant> False True False False

<question1> Келесі код не береді x=100 y=50 print(x and y)
<variantright> 50
<variant> True
<variant> False
<variant> 100
<variant> 200

<question1> Келесі + қосу операторы не береді ( ) : a=[10,20] b = a  b+=[30,40] print(<variantright> print(b)
<variantright> [10,20,30,40][10,20,30,40]
<variant> [10,20][10,20,30,40]
<variant> [10][10,20,30,40]
<variant> [10][10, 30,40]
<variant> [10,20][10,20,40,80]

<question1> Келесі Python өрнегінің мәні неде: print(36 / 4)
<variantright> 9.0
<variant> 9
<variant> 9.45
<variant> 9.12
<variant> 9/2

<question1> print(2%6) өрнегінің нәтижесі қандай
<variantright> 2
<variant> 0,33
<variant> ValueError
<variant> 3/1
<variant> 4

<question1> print(-18 // 4) өрнегінің нәтижесі қандай
<variantright> -5
<variant> 4
<variant> -4
<variant> 5
<variant> -9

<question1> print(2 ** 3 ** 2) өрнегінің нәтижесі қандай
<variantright> 512
<variant> 64
<variant> 45
<variant> 74
<variant> 60

<question1> print(2 * 3 ** 3 * 4) өрнегінің нәтижесі қандай
<variantright> 216
<variant> 864
<variant> 74
<variant> 54
<variant> 12

<question1> Python: x = 10 y = 50 if(x** 2> 100 and y <100): print(x,y) өрнегінің нәтижесі қандай
<variantright> None
<variant> 10 50
<variant> 100 500
<variant> 1 25
<variant> 4 25

<question1> Бит ығысу операторлары ( < < ,>>) қарағанда жоғары басымдыққа ие &бит және () операторы.
<variantright> True
<variant> False
<variant> False and True
<variant> True and False
<variant> None

<question1> print(10 - 4 * 2) өрнегінің нәтижесі қандай
<variantright> 2
<variant> 12
<variant> 24
<variant> 52
<variant> 4

<question1> Келесі операторлардың қайсысы ең жоғары басымдыққа ие?
<variantright> *
<variant> &
<variant> not
<variant> +
<variant> /

<question1> x=6 y=2 print(x ** y) print(x // y) өрнегінің нәтижесі қандай
<variantright> 36, 3
<variant> 36 , 0 
<variant> 66, 3
<variant> 66 , 0
<variant> 12

<question1> Келесі тағайындау операторы не береді y=10 x=y+=2
<variantright> SynatxError
<variant> 10
<variant> 12
<variant> 22
<variant> 1

<question1> Рекурсивті функцияға қатысты нұсқалардың қайсысы дұрыс?
<variantright> рекурсивті функция кодты жеңілдету үшін қолданылады.
<variant> олар рекурсивті емес функцияларға қарағанда көбірек орын алады.
<variant> оларды әрдайым рекурсивті емес функциялармен алмастыруға болады.
<variant> бағдарлама үшін табиғи және қарапайым шешім береді.
<variant> бағдарлама үшін табиғи және қарапайым шешім бермейді.

<question1> Тінтуірдің оң жақ батырмасын босатқан кезде қай операция басталады?
<variantright> <ButtonReleased-3>
<variant> <ButtonPressed>
<variant> <ButtonReleased>
<variant> <ButtonPressed-3>
<variant> <ButtonReleased-1>

<question1> Python-да біз қалқымалы мәзір жасай аламыз. Қалқымалы Мәзірді көрсету үшін кодты таңдаңыз?
<variantright> Menu.post(250,250)
<variant> Menu.post()
<variant> Menu.display()
<variant> Menu.display_popup(250,250)
<variant> Menu.display_popup(2,250)

<question1> Келесі функциялардың қайсысы бүтін санды Python-да сегіз жолға түрлендіреді?
<variantright> oct(x)
<variant> ord(x)
<variant> hex(x)
<variant> unichr(x)
<variant> unichrs(x)

<question1> Келесі бағдарлама не береді? X=5 y=6  If(x = = y)
<variantright> False
<variant> True
<variant> 1
<variant> 0
<variant> 3

<question1> Python мұрагер ретінде жасалған
<variantright> ABC
<variant> Lisp
<variant> Java
<variant> C
<variant> C#

<question1> Python алғаш рет пайда болды
<variantright> ақпан 1991 ж
<variant> желтоқсан 1987 ж
<variant> шілде 2001 ж
<variant> шілде 2005 ж
<variant> желтоқсан 2015 ж.

<question1> Python әзірленді
<variantright> Guido van Rossum
<variant> James Gosling
<variant> Dennis Ritchie
<variant> Google
<variant> Apple

<question1> Жолдың ұзындығын қайтару үшін mystr біз қандай команданы орындаймыз?
<variantright> len(mystr)
<variant> size(mystr)
<variant> s.size()
<variant> cmd(z)
<variant> d.size()

<question1> Trunc () қайтару мәні қандай?
<variantright> int
<variant> compiler / compile time
<variant> float
<variant> bool
<variant> bools

<question1> А мәні қандай? а = 4 * 4-4 + 4/4
<variantright> 13
<variant> 5
<variant> 19
<variant> 4
<variant> 44

<question1> мәндерді кілт мәні жұбы ретінде сақтау үшін бізге қандай негізгі мәліметтер қажет?
<variantright> dictionary
<variant> tuple
<variant> List
<variant> True
<variant> class

<question1> Жолдан 3-позициядағы таңбаны алу үшін mystr = "codecracker" Біз қандай команданы орындаймыз ?
<variantright> mystr[3]
<variant> mystr.getItem(3)
<variant> list(b)
<variant> list(s)
<variant> list(z)

<question1> Келесі бағдарлама не береді? mystr = "codecracker" print (mystr.replace ("c", "x"))
<variantright> xodesxraxker
<variant> cxxxxcxxcxxx
<variant> odesraker
<variant> oscpr
<variant> ojficdeo

<question1> Келесі бағдарлама не береді? mystr = "codescracker" print(type(mystr))
<variantright> <class 'str'>
<variant> <class 'int'>
<variant> <class 'string'>
<variant> <class 'bool'>
<variant> <class 'bools'>

<question1> format () функциясы қайтарады
<variantright> str
<variant> bool 
<variant> int
<variant> Error
<variant> integer

<question1> Келесі мәлімдемелердің қайсысы екі жолды үшінші жолға біріктіру үшін қолданылады?
<variantright> s3 = s1 + s2
<variant> s3 = s1.add (s2)
<variant> s3 = s1 * s2
<variant> s3 = s1 * s3
<variant> s3 = s ** s

<question1> Қарастырылған  i тең 5-ке,  j тең 4-ке, i + j  сондағы, жазылуы
<variantright> i.__add__(j)
<variant>  i.__ad d(j)func
<variant> i.__A dd(j)true
<variant> i.__ADD(j)false
<variant> i.__ (j)run

<question1> Аталғандардың қайсысы дұрыс емес?
<variantright> х = 03964
<variant> х = 19023
<variant> х = 0x4f5
<variant> х = 0b101
<variant> х = 0b107

<question1> Келесі міндер ішінен , қайсы кешенді сан болып табылмайды?
<variantright> k = 9023
<variant> k = complex(2, 3)
<variant> k = 2 + 3j
<variant> k = + 3J
<variant> k = 3 + 3J

<question1> "2" - ге тең "А" жол айнымалысын 2 бүтін санға қалай айналдырар едіңіз?
<variantright> int(a)
<variant> castToInt(a)
<variant> integer(a)
<variant> castToInteger(a)
<variant> Machine dependent

<question1> Функция идентификаторының қайтарылатын мәні қандай?
<variantright> int
<variant> float
<variant> bool
<variant> dict
<variant> bools

<question1> Нұсқалардың қайсысы негізгі емес деректер түріне жатады?
<variantright> Class
<variant> Tuples
<variant> Dictionary
<variant> Lists
<variant> bool

<question1> Python-да нұсқалар арасында идентификатор қайсы болуы мүмкін?
<variantright> _xy1
<variant> $12a
<variant> 1abc
<variant> @python
<variant> #java

<question1> Нәтижесі қандай 3 in [1, 2, 3]?
<variantright> true
<variant> false
<variant> Error
<variant> None of the above.
<variant> true and false

<question1> Олардың ішінде Python-да escape тізбегі қандай?
<variantright> \\x
<variant> /x
<variant> ESC
<variant> ~
<variant> *x

<question1> Төмендегі функциялардың қайсысы жолдағы алғашқы ішкі жолдың барлық кірістерін жаңа жолмен алмастырады?
<variantright> replace(old, new [, max])
<variant> strip([chars])
<variant> swapcase()
<variant> title()
<variant> swap

<question1> Екілік форматта жазу үшін файлды ашу үшін қандай код қолданылады?
<variantright> ''wb''
<variant> ''w''
<variant> ''r+''
<variant> ''a''
<variant> ''s''

<question1> Келесі Код үшін не көрсетіледі - y = [4, 5,1j] y.sort()
<variantright> Type Error
<variant> [5,4,1j]
<variant> [4,5,1j]
<variant> [1j, 4,5]
<variant> [4,1j]

<question1> Қандай нәтиже шығады x in [1, 2, 3]: print x?
<variantright> 1 2 3
<variant> x x x
<variant> Error
<variant> None of the above
<variant> 4 5 6

<question1> Dict 1, dict 2 екі сөздігінің элементтерін келесі қандай функция салыстырады?
<variantright> cmp (dict1, dict2)
<variant> dict1.sort (dict2)
<variant> dict1.cmp (dict2)
<variant> dict1.cmp (dict3)
<variant> dict2.cmp (dict4)

<question1> Түйіндер мен тізім үшін не дұрыс?
<variantright> тізім өзгереді, ал түйіндер өзгермейді.
<variant> тізім мен түйіндер өзгереді.
<variant> тізім мен түйіндер өзгермейді.
<variant> тізім өзгермейді, ал түйіндер өзгереді.
<variant> түйіндер өзгереді.

<question1> Edit1 және edit2 сияқты кез-келген екі сөздіктің элементтерін салыстыру үшін келесі функциялардың қайсысы қолданылады?
<variantright> cmp (dict1, dict2)
<variant> dict1.sort (dict2)
<variant> dict1.cmp (dict2)
<variant> dict1.cmp (dict3)
<variant> dict2.cmp (dict2)

<question1> Кодтың шығуын көрсетіңіз? math.copysign(2 ,-1)
<variantright> -2,0
<variant> 1.0
<variant> 1
<variant> 2,0
<variant> 20

<question1> 1-туынды фрейм жақтауының астында тексеру түймесін жасау үшін дұрыс кодты таңдаңыз және оны v1-ге байлау керек пе?
<variantright> Checkbutton(frame1 , text=''Bold’’ ,variable=v1 ,command=processCheckbutton)
<variant> CheckButton(frame1, text=''Bold'' , command=CheckButton)
<variant> Checkbutton(frame1,text=''Bold'',variable=v1.set(),command=v1.set(processCheckbut ton)
<variant> Checkbutton(frame.set(f1) ,text.set(''bold'') ,command=v1.set(processCheckbutton)
<variant> Checkbutton(frame.set(f1) ,text.set(''text'') ,command=v1.set(processCheckbutton)

<question1> Python-да z = 5 үшін мүмкін емес операция?
<variantright> z = z++
<variant> z = ++z
<variant> z += 1
<variant> z -= 1
<variant> z -= 5

<question1> Python туралы келесі не дұрыс?
<variantright> Функционалды және құрылымдық бағдарламалау әдістерін
<variant> оны сценарий тілі ретінде пайдалануға болады немесе үлкен қосымшаларды құру үшін байт кодына құрастыруға болады.
<variant> өте жоғары деңгейдегі динамикалық деректер түрлерін ұсынады және динамикалық типтерді тексеруді қолдайды.
<variant> Функционалды және құрылымдық бағдарламалау әдістерін, сондай-ақ OOP қолдайды.
<variant> өте жоғары деңгейдегі динамикалық деректер түрлерін ұсынады.

<question1> Оқиғалар циклды құру үшін қай нұсқа қолданылады?
<variantright> Window.mainloop ()
<variant> Window.eventloop ()
<variant> Window.loop ()
<variant> Eventloop.window ()
<variant> Eventloop()

<question1> ['Hi!'] * 4 нәтижесі қандай?
<variantright> ['Hi!', 'Hi!', 'Hi!', 'Hi!']
<variant> ['Hi!'] * 4
<variant> Error
<variant> None of the above
<variant> 16

<question1> Encode () - де кодтау үшін әдепкі кодировка мәні қандай?
<variantright> utf-8
<variant> utf-16
<variant> qwerty
<variant> ascii
<variant> utf-64

<question1> Бұл операция қандай мән шығарады print tinylist * 2, если tinylist = [123, 'john']?
<variantright> [123, 'john', 123, 'john']
<variant> [123, 'john'] * 2
<variant> Error
<variant> [254, 'john'] * 2
<variant> Error 256

<question1> Берілген индекс бойынша нысанды тізімге қандай келесі функция енгізеді?
<variantright> list.insert(index, obj)
<variant> list.index(obj)
<variant> list.pop(obj=list[-1])
<variant> list.remove(obj)
<variant> remove(obj)

<question1> Windows жүйесінде Python үшін келесі қоршаған орта айнымалыларының қайсысы Python-ды импорттау мәлімдемесінде регистрді ескерместен бірінші ұқсастықты табуға нұсқау үшін қолданылады?
<variantright> PYTHONCASEOK
<variant> PYTHONSTARTUP
<variant> PYTHONPATH
<variant> PYTHONHOME
<variant> PYTHONHOMES

<question1> Obj пайда болатын тізімдегі ең төменгі индексті келесі қандай функция қайтарады?
<variantright> list.index(obj)
<variant> list.insert(index, obj)
<variant> list.pop(obj=list[-1])
<variant> list.remove(obj)
<variant> remove(obj)

<question1> Басып шығару тізімінің нәтижесі қандай, егерде list = ['abcd', 786, 2.23, 'john', 70.2]?
<variantright> [ 'abcd', 786 , 2.23, 'john', 70.2 ]
<variant> list
<variant> Error
<variant> None of the above.
<variant> lists

<question1> Python үшін келесі орта айнымалыларының қайсысы Python аудармашысына бағдарламаға импортталған модуль файлдарын қайда орналастыру керектігін белгілейді?
<variantright> PYTHONPATH
<variant> PYTHONSTARTUP
<variant> PYTHONCASEOKAND
<variant> PYTHONHOME
<variant> PYTHONHOMES

<question1> Python-да кездейсоқ мәндерді құру үшін қандай модуль қолданылады?
<variantright> random
<variant> randit
<variant> os
<variant> rand
<variant> rands

<question1> Төмендегі функциялардың қайсысы жолдағы кіші әріптерді тексереді?
<variantright> islower()
<variant> isnumeric()
<variant> isspace()
<variant> istitle()
<variant> istitles()

<question1> Берілген кодтың нәтижесі қандай болады? colors = [''white'', ''Black'', ''Grey ''] x = ''Red'' not in colors
<variantright> True
<variant> Error: 256
<variant> False
<variant> Error: ‘‘not in’’ not defined
<variant> False and True

<question1> Келесі операторлардың қайсысы синтаксистік тұрғыдан қажет болған кезде қолданылады, бірақ сіз кез-келген команда немесе кодтын орындалғанын қаламайсыз?
<variantright> pass
<variant> break
<variant> continue
<variant> list
<variant> None of the above.

<question1> Қорытынды не үшін қажет -'search'. find('S') ?
<variantright> -1
<variant> s
<variant> b
<variant> ‘ ‘
<variant> None of the above

<question1> Келесі функция тізім нысандарынын орындарын ауыстырады?
<variantright> list.reverse()
<variant> list.sort([func])
<variant> list.pop(obj=list[-1])
<variant> list.remove(obj)
<variant> remove(obj)

<question1> Кодтың шығуы қандай? d0 = { 'a':1, 'b':2} d1 = { 'a':3, 'b':4} d1 > d0
<variantright> Error
<variant> False
<variant> True
<variant> Values[d1] > Values[d2]
<variant> True and False

<question1> Төмендегі функциялардың қайсысы бос пробелдармен толтырылған жолды алады, ал бастапқы жол сол жақ бағандардың жалпы еніне тураланады?
<variantright> ljust(width[, fillchar])
<variant> len(string)
<variant> join(seq)
<variant> isupper()
<variant> continue

<question1> Шығу кезінде ешқандай команда термеу үшін төмендегі кодта не көрсетілуі керек? for i in range(?): print(i)
<variantright> 0
<variant> 0,1
<variant> NULL
<variant> 1
<variant> False

<question1> Нәтижесі қандай print tinytuple * 2 if tinytuple = (123, 'john')?
<variantright> (123, 'john', 123, 'john')
<variant> (123, 'john') * 2
<variant> Error
<variant> (123, 'john') * 5
<variant> (464, 'john') * 5

<question1> Келесі кодты не көрсетеді - a = (1, 2) a[0] +=1
<variantright> Type Error
<variant> Syntax Error
<variant> 2
<variant> (1,1,2)
<variant> (0,1,2)

<question1> Python-да бос жиынтық жасау үшін қандай параметрлер дұрыс?
<variantright> set()
<variant> []
<variant> ()
<variant> {}
<variant> tb()

<question1> Қандай кілт сөз ('?') Келесі кодтың келесі шығуын алу үшін қолданылады? print(?''\\hello'')
<variantright> ? = r
<variant> ? = \\
<variant> ? = sameline
<variant> ? = inline
<variant> ? = inlines

<question1> Сіз тор менеджерін қолданасыз делік, онда компонентті бірнеше жолдар мен бағандарға орналастыру үшін қай нұсқа дұрыс?
<variantright> бағандар аралығы және жолдар арасындағы аралық
<variant> тек қатар
<variant> тек баған
<variant> тек rowspan
<variant> тек list

<question1> Келесі кодтан шыққан кезде қандай мән шығады? minidict = { 'name': 'TutorialsPoint', 'name': 'website'} print(minidict['name'])
<variantright> Website
<variant> ('TutorialsPoint' , 'website')
<variant> TutorialsPoint
<variant> Будет отображена Error
<variant> TutorialsPoints

<question2> Келесі нұсқаларда деректерді талдау және ғылыми есептеу үшін қолданылатын Python кітапханалары бар.
<variantright> Pandas, Numpy
<variant> Pandas,list
<variant> Scipy, int
<variant> Numpy, string
<variant> Cmake, integer

<question2> Python-да келесі деректер түрлерінің қайсысы қолдау көрсетпейді?
<variantright> Generics
<variant> Dictionary
<variant> Tuple
<variant> List
<variant> int

<question2> Төмендегі тізімдегі 5 жалпы санын есептеңіз? 5 санын есептеу функциясын көрсетіңіз. List1 = [5, 50, 55, 555, 5555]
<variantright> List1.count(5), 1
<variant> List1.count(5), 4
<variant> List1.count(5), 2
<variant> List1.count(5), 11
<variant> List1.count(5), 16

<question2> Нұсқанын қайсысы Python-да жалған мәлімдеме болып табылады?
<variantright> int = “144”
<variant> интервал (144.0) == 144
<variant> int ('144') == 144
<variant> int (144) == 144
<variant> int (155) == 155

<question2> Ағымдағы терезе пайдаланушысын білу үшін Python-да код қандай?
<variantright> os.getlogin()
<variant> os.login()
<variant> os.user()
<variant> os.walk()
<variant> os.walks()

<question2> Python-дағы кортеждерге қатысты келесілердің қайсысы дұрыс?
<variantright> Тізімдерден айырмашылығы, кортеж жақшаға салынған.
<variant> кортеж тізімге ұқсас бірқатар мәндерден тұрады.
<variant> кортеж үтірмен бөлінген бірқатар мәндерден тұрады.
<variant> кортеж - бұл тізімге ұқсас дәйектілік деректерінің басқа түрі.
<variant> кортеж-бұл бірізділік деректерінің басқа түрі.

<question2> Келесі функциялардың қайсысы str жолынан максималды алфавиттік таңбаны қайтарады?
<variantright> max(str)
<variant> min(str)
<variant> lower()
<variant> lstrip()
<variant> lstrips()

<question2> Келесі код қандай мән шығарады - s = ''mnopqr '' i = ''m '' while i in s: print('i', end= '' '')
<variantright> i i i i i i i i
<variant> m m m m m
<variant> m n o p q r
<variant> no output
<variant> output

<question2> Төмендегі функциялардың қайсысы Python-да жолды  нүктеден кейінгі санға өзгертеді?
<variantright> float(x)
<variant> long(x [,base] )
<variant> str(x1)
<variant> int(x [,base])
<variant> integer ()

<question2> Келесі функциялардың қайсысы кездейсоқ таңдалған элементті диапазонын қайтарады?
<variantright> randrange ([start,] stop [,step])
<variant> choice(seq)
<variant> random()
<variant> seed([x])
<variant> random

<question2> Төмендегі функциялардың қайсысы барлық таңбалардың пробел бар екенін тексереді?
<variantright> isspace()
<variant> isnumeric()
<variant> islower()
<variant> istitle()
<variant> istitles()

<question2> Кодта a, b, c мәні қандай?a, b = c = 2 + 2, ''TutorialsPoint''
<variantright> а = 4 b = 'TutorialsPoint' c = 4, 'TutorialsPoint'
<variant> а = 2 b = 'TutorialsPoint' c = 4, 'TutorialsPoint'
<variant> a = 4, 'TutorialsPoint' b = 4, 'TutorialsPoint' c = 4, 'TutorialsPoint'
<variant> а = 4 b = 'TutorialsPoint' c = NULL
<variant> а = 4 b = 'TutorialsPoint' c = 0

<question2> Python тіліндегі қай айнымалы Python аудармашысына бағдарламаға импортталған модуль файлдарын орналастыру керектігін айтады?
<variantright> PYTHONPATH
<variant> PYTHONSTARTUP
<variant> PYTHONCASEOK
<variant> PYTHONHOME
<variant> PYTHONHOMES

<question2> Python-дағы келесі операторлардың қайсысы, егер ол көрсетілген ретпен айнымалыны таппаса және жалған болса, шындық ретінде бағаланады?
<variantright> not in
<variant>  is
<variant> //
<variant> **
<variant> %

<question2> Екі жолды үшінші жолға қалай біріктіруге болады?
<variantright> Str3 = Str1.__add__(Str2)
<variant> Str3 = Str1.concat(Str2)
<variant> Str3 = Str1*Str2
<variant> Str3 = Str1 + + Str2
<variant> Str4 = Str5 + + Str2

<question2> Python-да қалқымалы мәзір жасауға болады. Қалқымалы Мәзірді көрсету үшін кодты таңдаңыз?
<variantright> Menu.post (250,250)
<variant> Menu.post ()
<variant> Menu.display ()
<variant> Menu.display_popup (250,250)
<variant> Menu.display (50,250)

<question2> Қандай мән шығарады print tuple[2:] if tuple = ( 'abcd', 786 , 2.23, 'john', 70.2 )?
<variantright> (2.23, 'john', 70.2)
<variant> ( 'abcd', 786 , 2.23, 'john', 70.2 )
<variant> abcd
<variant> ( 'abcd', 786 , 2, 'john', 70.2 )
<variant> ( 'abcd', 786 , 2.233, 'john', 70.2 )

<question2> Int "a" типті айнымалы мәнді 2-ге "2"жолына қалай түрлендіресіз?
<variantright> str(a)
<variant> int(a)
<variant> castToString(a)
<variant> string(a)
<variant> bool(a)

<question2> Python-да әр түрлі негізгі операторлар бар, олар өздерінің басымдықтарының ретіне сәйкес жұмыс істейді. Келесі оператордың басымдық ретін орнатыңыз - i)- Division ii)- Multiplication iii)- Parentheses iv)- Exponential v)- Addition vi)- Subtraction
<variantright> iii, iv, i, ii, v, vi.
<variant> iv, iii, i, ii, v, vi.
<variant> iv, iii, ii, i, vi, v.
<variant> i, ii, iii, iv, v, vi.
<variant> i, ii, iii, iv, vi, v.

<question2> Бізге екі жиынтық (s1 және s2) берілген делік, содан кейін S1 + S2 кодының нәтижесі қандай
<variantright> бұл жарамсыз команда.
<variant> шығару S1-де сақталады.
<variant> қайталанатын элементтерді жояды және екі жиынтықты да қосады.
<variant> екі жиынның элементтерін қосады.
<variant> элементтерді бүктейді

<question2> Python туралы келесі не дұрыс?
<variantright> Функционалды және құрылымдық бағдарламалау әдістерін, сондай-ақ OOП қолдайды.
<variant> өте жоғары динамикалық деректер түрлерін ұсынады
<variant> оны сценарий тілі ретінде пайдалануға болады немесе үлкен қосымшаларды құру үшін байт кодына құрастыруға болады.
<variant> өте жоғары деңгейдегі динамикалық деректер түрлерін ұсынады және динамикалық типтерді тексеруді қолдайды.
<variant> динамикалық деректер түрлерін ұсынады

<question2> Сөздік кілттерін санау үшін қандай код болуы мүмкін? My_dictionary = {0: 'a', 1: 'b', 2: 'c'}
<variantright> for i in My_Dictionary: print(i)
<variant> Not possible.
<variant> for i in My_Dictionary: print(My_Dictionary)
<variant> for i in My_Dictionary: print(keys)
<variant> for i in My_Dictionary:  key

<question2> Бағдарламаны тоқтатуға / аяқтауға әкелмейтін қатені атаңыз.
<variantright> Logical error
<variant> Runtime error
<variant> Syntax error
<variant> Null
<variant> Error 256

<question2> Төмендегі функциялардың қайсысы Python-да жолды өзгермелі нүкте санына түрлендіреді?
<variantright> float(x)
<variant> str(x)
<variant> long(x [,base] ) 
<variant> int(x [,base])
<variant> integer

<question2> Шығу мәні не үшін қажет - S = [['his', 'to sel'], [90, 28, 43]] S [0] [1] [1]
<variantright> 'е'
<variant> 'i'
<variant> '90'
<variant> 'h'
<variant> 'z'

<question2> Келесі код қандай мән көрсетеді - x = 2 y = 10 x * = y * x + 1
<variantright> 42
<variant> 41
<variant> 40
<variant> 39
<variant> 28

<question2> Қай оператор оңшыл(правоассоциативен)?
<variantright> =
<variant> *
<variant> +
<variant> %
<variant> **

<question2> Қорытынды не үшін қажет - 2 * 2 ** 3
<variantright> 16
<variant> 36
<variant> 64
<variant> 12
<variant> 18

<question2> Келесі нәтижелер қандай - print ('' abbzxyzxzxabb ''. count ('abb', - 10, -1))
<variantright> 0
<variant> 2
<variant> 1
<variant> Error
<variant> 5

<question2> Келесі код не береді? def f(x = 100, y = 100): return(x+y, x-y) x, y = f(y = 200, x = 100) print(x, y)
<variantright> 300-100
<variant> 200 0
<variant> 200 100
<variant> 0 300
<variant> 250 250

<question2> Екілік жазу үшін файлды ашу үшін қандай код қолданылады?
<variantright> ''wb''
<variant> ''w''
<variant> ''r+''
<variant> ''a''
<variant> ''z''

<question2> ProcessButton көмегін пайдаланып түпкі терезенің түймесін жасау үшін дұрыс кодты таңдаңыз
<variantright> Button(window ,text= ''Hello'' ,command=processButton)
<variant> Button(text= ''hello'' ,command=processButton)
<variant> Button(window ,text= ''Ok'' ,fg= ''black '')
<variant> Button(set.text= ''Hello'' )
<variant> Button(sets.text= ''Hello'' )

<question2> Что будет на выходе следующего кода? print(type(1/2))
<variantright> <class 'float'>
<variant> <class 'int'>
<variant> NameError: ‘½’ is not defined.
<variant> 0.5
<variant> ½

<question2> Төмендегі функциялардың қайсысы жолдағы барлық бастапқы және соңғы пробелдарды жояды?
<variantright> strip([chars])
<variant> replace(old, new [, max])
<variant> swapcase()
<variant> title()
<variant> titles()

<question2> Төмендегі функциялардың қайсысы жолдағы барлық әріптер регистрін өзгертеді?
<variantright> swapcase()
<variant> strip([chars])
<variant>  replace(old, new [, max])
<variant> title()
<variant> titles()

<question2> Келесі функциялардың қайсысы тақырып жолының нұсқасын қайтарады?
<variantright> title()
<variant> strip([chars])
<variant> swapcase()
<variant> replace(old, new [, max])
<variant> st([chars])

<question2> Келесі функциялардың қайсысы жолды бас әріпке айналдырады?
<variantright> upper()
<variant> isdecimal()
<variant> swapcase()
<variant> title()
<variant> strip([chars])

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың ондық екенін тексереді?
<variantright> isdecimal()
<variant> upper()
<variant> swapcase()
<variant> title()
<variant> strip([chars])

<question2> Қандай мән береді len ([1, 2, 3])?
<variantright> 3
<variant> 2
<variant> 1
<variant> 4
<variant> 16

<question2> Қандай мән береді [1, 2, 3] + [4, 5, 6]?
<variantright> [1, 2, 3, 4, 5, 6]
<variant> [1, 2, 3],[4, 5, 6]
<variant> [5, 7,9]
<variant> 21
<variant> 42

<question2> Қандай мән береді ['Hi!'] * 4?
<variantright> ['Hi!', 'Hi!', 'Hi!', 'Hi!']
<variant> ['Hi!'] * 4
<variant> Error
<variant> None of the above
<variant> 4*Hi

<question2> Қандай мән береді 3 in [1, 2, 3]?
<variantright> true
<variant> false
<variant> Error
<variant> None of the above
<variant> 1

<question2> Қандай мән береді x in [1, 2, 3]: print x?
<variantright> 1 2 3
<variant> x x x
<variant> Error
<variant> None of the above.
<variant> 6

<question2> Қандай мән береді L [2], tuth L = [1,2,3]?
<variantright> 3
<variant> 2
<variant> 1
<variant> None of the above.
<variant> 6

<question2> Қандай мән береді L [-2], если L = [1,2,3]?
<variantright> 1
<variant> 2
<variant> 3
<variant> Null
<variant> 6

<question2> Қандай мән береді L [1:], если L = [1,2,3]?
<variantright> 2,3
<variant> 2
<variant> 3
<variant> Null
<variant> 6

<question2> Екі тізімнің элементтерін келесі қандай функция салыстырады?
<variantright> cmp(list1, list2)
<variant> len(list1, list2)
<variant> max(list1, list2)
<variant> min(list1, list2)
<variant> min(list15, list22)

<question2> Тізімнің жалпы ұзындығын беретін келесі функция қандай?
<variantright> len(list)
<variant> cmp(list)
<variant> max(list)
<variant> min(list)
<variant> min(lists)

<question2> Максималды мәні бар тізімнен келесі қандай функция элементті қайтарады?
<variantright> max(list)
<variant> len(list)
<variant> cmp(list)
<variant> min(list)
<variant> min(lists)

<question2> Какая следующая функция возвращает элемент из списка с минимальным значением?
<variantright> min(list)
<variant>  len(list)
<variant> max(list)
<variant> cmp(list)
<variant> lengz(list)

<question2> Obj пайда болатын тізімдегі ең төменгі индексті қай функция қайтарады?
<variantright> list.index(obj)
<variant> list.pop(obj=list[-1])
<variant> list.insert(index, obj)
<variant> remove(obj)
<variant> list.remove(obj)

<question2> Берілген индекс бойынша объектіні тізімге келесі қандай функция енгізеді?
<variantright> list.insert(index, obj)
<variant>  list.index(obj)
<variant> list.pop(obj=list[-1])
<variant> list.remove(obj)
<variant> remove(obj)

<question2> Тізімдегі соңғы нысанды келесі қандай функция жояды?
<variantright> list.pop(obj=list[-1])
<variant> list.insert(index, obj)
<variant> list.index(obj)
<variant> list.remove(obj)
<variant> remove(obj)

<question2> Нысанды тізімнен қандай функция алып тастайды?
<variantright> list.remove(obj)
<variant> list.insert(index, obj)
<variant> list.pop(obj=list[-1])
<variant> list.index(obj)
<variant> index(obj)

<question2> Келесі функция тізім нысандарын қай жерде өзгертеді?
<variantright> list.reverse()
<variant> list.sort([func])
<variant> list.pop(obj=list[-1])
<variant> list.remove(obj)
<variant> index(obj)

<question2> Келесі функция тізімді сұрыптайды?
<variantright> list.sort([func])
<variant> list.reverse()
<variant> list.pop(obj=list[-1])
<variant> list.remove(obj)
<variant> index(obj)

<question2> Какая следующая функция сравнивает элементы обоих словарей dict1, dict2?
<variantright> cmp(dict1, dict2)
<variant> dict1.sort(dict2)
<variant> dict1.cmp(dict2)
<variant> None of the above.
<variant> index(obj)

<question2> Dict 1, dict 2 сөздіктерінің екі элементінің ұзындығын келесі қандай функция қайтарады?
<variantright> len(dict)
<variant> min(dict)
<variant> max(dict)
<variant> None of the above
<variant>  index(obj)

<question2> Төмендегі объект қандай деректер түріне жатады? L = [1, 23, 'привет', 1]
<variantright> List
<variant> Dictionary 
<variant> Tuple
<variant> Array
<variant> int

<question2> Төмендегі функциялардың қайсысы Python-да жолды өзгермелі нүкте санына түрлендіреді?
<variantright> float(x)
<variant> long(x [,base] )
<variant> int(x [,base])
<variant> str(x)
<variant> integer

<question2> Келесі бағдарламаның нәтижесін табыңыз:nameList = ['Harsh', 'Pratik', 'Bob', 'Dhruv'] pos = nameList.index("GeeksforGeeks") print (pos * 3)
<variantright> ValueError: 'GeeksforGeeks' is not in list
<variant> Harsh Harsh Harsh
<variant> Harsh
<variant> GeeksforGeeks GeeksforGeeks GeeksforGeeks
<variant> Error 256

<question2> Python-дағы келесі операторлардың қайсысы, егер ол көрсетілген ретпен айнымалыны таппаса және жалған болса, шындық ретінде бағаланады?
<variantright> not in
<variant> //
<variant> is
<variant> **
<variant> \\

<question2> Келесі операторлардың қайсысы цикл операторын аяқтайды және орындауды тікелей циклден кейінгі операторға береді?
<variantright> break
<variant> continue
<variant> pass
<variant> Null
<variant> delete

<question2> Келесі операторлардың қайсысы циклды қалған бөлігін өткізіп жіберуге және қайталамас бұрын олардың орындалуын дереу тексеруге мәжбүр етеді?
<variantright> continue
<variant> break
<variant> pass
<variant> None of the above.
<variant> Null

<question2> Келесі операторлардың қайсысы синтаксистік тұрғыдан қажет болған кезде қолданылады, бірақ сіз кез-келген команданы немесе кодты орындағыңыз келмейді?
<variantright> pass
<variant> continue
<variant> break
<variant> None of the above
<variant> Null

<question2> Келесі функциялардың қайсысы кездейсоқ элементті тізімнен, жиектен немесе жолдан қайтарады?
<variantright> choice(seq)
<variant> randrange ([start,] stop [,step])
<variant> random()
<variant> seed([x])
<variant> break

<question2> Келесі функциялардың қайсысы кездейсоқ таңдалған элементті диапазоннан қайтарады?
<variantright> randrange ([start,] stop [,step])
<variant> choice(seq)
<variant> random()
<variant> seed([x])
<variant> break

<question2> Келесі функциялардың қайсысы r кездейсоқ өзгермелі санды қайтарады, яғни 0 r-ден аз немесе оған тең, ал r-1-ден аз?
<variantright> random()
<variant> randrange ([start,] stop [,step])
<variant> choice(seq)
<variant> seed([x])
<variant> break

<question2> Келесі функциялардың қайсысы кездейсоқ сандарды құру кезінде қолданылатын бүтін санды бастапқы мәнді белгілейді?
<variantright> seed([x])
<variant> randrange ([start,] stop [,step])
<variant> random()
<variant> choice(seq)
<variant> break

<question2> Төмендегі функциялардың қайсысы тізім элементтерін орнында рандомизациялайды?
<variantright> shuffle(lst)
<variant> capitalize()
<variant> isalnum()
<variant> isdigit()
<variant> break

<question2> Келесі функциялардың қайсысы жолдың бірінші әрпін бас әріпке айналдырады?
<variantright> capitalize()
<variant> shuffle(lst)
<variant> isalnum()
<variant> isdigit()
<variant> break

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың әріптік-сандық екенін тексереді?
<variantright> isalnum()
<variant> capitalize()
<variant> shuffle(lst)
<variant> isdigit()
<variant> break

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың сандар екенін тексереді?
<variantright> isdigit()
<variant> capitalize()
<variant> isalnum()
<variant> shuffle(lst)
<variant> break

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың кіші регистрде екенін тексереді?
<variantright> islower()
<variant> isnumeric()
<variant> isspace()
<variant> istitle()
<variant> break

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың сандық екенін тексереді?
<variantright> isnumeric()
<variant> islower()
<variant> isspace()
<variant> istitle()
<variant> break

<question2> Төмендегі функциялардың қайсысы барлық таңбалардың пробелдармен  екенін тексереді?
<variantright> isspace()
<variant> isnumeric()
<variant> islower()
<variant> istitle()
<variant> break

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың тақырыпта екенін тексереді?
<variantright> istitle()
<variant> isnumeric()
<variant> isspace()
<variant> islower()
<variant> break

<question2> Төмендегі функциялардың қайсысы жолдағы барлық таңбалардың жоғарғы регистрде екенін тексереді?
<variantright> isupper()
<variant> join(seq)
<variant> len(string)
<variant> ljust(width[, fillchar])
<variant> break

<question2> Келесі функциялардың қайсысы элементтерді ретпен біріктіреді?
<variantright> join(seq)
<variant> isupper()
<variant> len(string)
<variant> ljust(width[, fillchar])
<variant> break

<question2> Келесі функциялардың қайсысы жолдың ұзындығын алады?
<variantright> len(string)
<variant> join(seq)
<variant> isupper()
<variant> ljust(width[, fillchar])
<variant> break

<question2> Келесі функциялардың қайсысы жолдың енін алады?
<variantright> ljust(width[, fillchar])
<variant> join(seq)
<variant> len(string)
<variant> isupper()
<variant> break

<question2> Келесі функциялардың қайсысы жолды төменгі регистрге түрлендіреді?
<variantright> lower()
<variant> lstrip()
<variant> max(str)
<variant> min(str)
<variant> min()

<question2> Төмендегі функциялардың қайсысы жолдағы барлық жетекші олқылықтарды жояды?
<variantright> lstrip()
<variant> lower()
<variant> max(str)
<variant> min(str)
<variant> min()

<question2> Келесі функциялардың қайсысы strr жолынан максималды алфавиттік таңбаны қайтарады?
<variantright> max(str)
<variant> lstrip()
<variant> lower()
<variant> min(str)
<variant> min()

<question2> Келесі функциялардың қайсысы strr жолынан ең аз алфавиттік таңбаны қайтарады?
<variantright> min(str)
<variant> lstrip()
<variant> max(str)
<variant> lower()
<variant> max()

<question2> Төмендегі функциялардың қайсысы жолдағы ескі ішкі жолдың барлық кірістерін жаңа жолмен алмастырады?
<variantright> replace(old, new [, max])
<variant> strip([chars])
<variant> swapcase()
<variant> title()
<variant> max(str)

<question2> Келесі бағдарламаның нәтижесін табыңыз:D = dict() for x in enumerate(range(2)): D[x[0]] = x[1] D[x[1]+7] = x[0] print(D)
<variantright> {0: 0, 7: 0, 1: 1, 8: 1}
<variant> {1: 1, 7: 2, 0: 1, 8: 1}
<variant> {0: 1, 7: 0, 1: 1, 8: 0}
<variant> KeyError
<variant> Error

<question2> Бұл код нені көрсетеді?def func (val1, val2 = 2, val3 = 7, val4 = 1): вернуть val1 ** val2 ** val3 print (func (val2 = 2, val1 = 2, val3 = 4))
<variantright> 65536
<variant> 32768
<variant> 256
<variant> 45859
<variant> Error 256

<question2> Сөздікті қалай жасамайсыз?
<variantright> d = { ('milk', 50), ('celery', 40) }
<variant> d = {'milk': 50, 'celery': 40}
<variant> d = dict(milk=50, celery=40)
<variant> d = dict([ ('milk', 50), ('celery', 40) ])
<variant> d = {} d['milk'] = 50 d['celery'] = 40

<question2> Келесі бағдарламаның нәтижесін табыңыз:a = {i: i * i for i in range(6)} print (a)
<variantright> {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
<variant> Понимание словаря не существует
<variant> {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6:36}
<variant> {0: 0, 1: 1, 4: 4, 9: 9, 16: 16, 25: 25}
<variant> {0: 0, 1: 1, 4: 4, 9: 9}

<question2> Келесі код не береді:
<variantright> 4
<variant> 4.0
<variant> 4.5
<variant> Error
<variant> 5

<question2> Тұтқаны басып шығару нәтижесі қандай [2:], егерде кортеж = ('abcd', 786, 2.23, 'john', 70.2)?
<variantright> (2.23, 'john', 70.2)
<variant> abcd
<variant> (786, 2.23)
<variant> ( 'abcd', 786 , 2.23, 'john', 70.2 )
<variant> Error 256

<question2> Шығу мәні кезінде не болады print tinytuple * 2, если tinytuple = (123, 'john')?
<variantright> (123, 'john', 123, 'john')
<variant> (123, 'john') * 2
<variant> Error
<variant> (125, 'john') * 5
<variant> (123, 'john') * 5

<question2> Қандай мән шығарылады print tinytuple * 2, если tinytuple = (123, 'john')?
<variantright> (123, 'john', 123, 'john')
<variant> (123, 'john') * 2
<variant> Error
<variant> None of the above.
<variant> Null

<question2> Python-да төменде келтірілген сөздіктердің қайсысы дұрыс?
<variantright> олар Perl-де табылған ассоциативті массивтер немесе хэштер ретінде жұмыс істейді және кілт мәні жұптарынан тұрады.
<variant> Екінші жағынан, мәндер кез-келген ерікті Python нысаны бола алады.
<variant> сөздік кілт Python-ның кез-келген түрі болуы мүмкін, бірақ бұл әдетте сандар немесе жолдар. Екінші жағынан, мәндер кез-келген ерікті Python нысаны бола алады.
<variant> Python сөздіктері хэш кестелерінің бір түрі.
<variant> сөздік кілт Python-ның кез-келген түрі болуы мүмкін

<question2> Сөздіктің келесі функцияларының қайсысы сөздіктен барлық кілттерді алады?
<variantright> keys()
<variant> key()
<variant> getkeys()
<variant> None of the above.
<variant> Null

<question2> Сөздіктің келесі функцияларының қайсысы сөздіктен барлық мәндерді алады?
<variantright> values()
<variant> value()
<variant> getvalues()
<variant> None of the above.
<variant> Null

<question2> Төмендегі функциялардың қайсысы Python-да жолды int-ке түрлендіреді?
<variantright> int(x [,base])
<variant> long(x [,base] )
<variant> float(x)
<variant> str(x)
<variant> str()

<question2> Төмендегі функциялардың қайсысы Python-да жолды ұзын жолға айналдырады?
<variantright> long(x [,base] )
<variant> int(x [,base])
<variant> float(x)
<variant> str(x)
<variant> str()

<question2> Төмендегі функциялардың қайсысы Python-да жолды өзгермелі нүкте санына түрлендіреді?
<variantright> float(x)
<variant> long(x [,base] )
<variant> int(x [,base])
<variant> str(x)
<variant> str()

<question2> Келесі функциялардың қайсысы Python-да нысанды жолға түрлендіреді?
<variantright> str(x)
<variant> long(x [,base] )
<variant> float(x)
<variant> int(x [,base])
<variant> int()

<question3> Келесі функциялардың қайсысы Python-да нысанды тұрақты өрнекке айналдырады?
<variantright> repr(x)
<variant> eval(str)
<variant> tuple(s)
<variant> list(s)
<variant> str()

<question3> Төмендегі функциялардың қайсысы String-ті Python-дағы нысанға айналдырады?
<variantright> eval(str)
<variant> repr(x)
<variant> tuple(s)
<variant> list(s)
<variant> str()

<question3> Төмендегі функциялардың қайсысы String-ті Python-ға айналдырады?
<variantright> tuple(s)
<variant> eval(str)
<variant> repr(x)
<variant> list(s)
<variant> str()

<question3> Төмендегі функциялардың қайсысы Python-да жолды тізімге айналдырады?
<variantright> list(s)
<variant> eval(str)
<variant> tuple(s)
<variant> repr(x)
<variant> str()

<question3> Төмендегі функциялардың қайсысы String-ті Python-дағы жиынтыққа айналдырады?
<variantright> set(x)
<variant> dict(d)
<variant> frozenset(s)
<variant> chr(x)
<variant> str()

<question3> Төмендегі функциялардың қайсысы Python-дағы сөздік құрамына ауысады?
<variantright> dict(d)
<variant> set(x)
<variant> frozenset(s)
<variant> chr(x)
<variant> str()

<question3> Какая из следующих функций преобразует строку в замороженный набор в Python?
<variantright> frozenset(s)
<variant> dict(d)
<variant> set(x)
<variant> chr(x)
<variant> str()

<question3> Келесі функциялардың қайсысы бүтін санды Python-да символға айналдырады?
<variantright> chr(x)
<variant> dict(d)
<variant> frozenset(s)
<variant> set(x)
<variant> str()

<question3> Келесі функциялардың қайсысы бүтін санды Питондағы Юникод символына айналдырады?
<variantright> unichr(x)
<variant> ord(x)
<variant> hex(x)
<variant> oct(x)
<variant> str()

<question3> Келесі функциялардың қайсысы жеке таңбаны Python-дағы бүтін санға түрлендіреді?
<variantright> ord(x)
<variant> unichr(x)
<variant> hex(x)
<variant> oct(x)
<variant> str()

<question3> Келесі функциялардың қайсысы бүтін санды Python-да он алтылық жолға түрлендіреді?
<variantright> hex(x)
<variant> ord(x)
<variant> unichr(x)
<variant> oct(x)
<variant> str()

<question3> Келесі функциялардың қайсысы бүтін санды Python-да сегіз жолға түрлендіреді?
<variantright> oct(x)
<variant> ord(x)
<variant> hex(x)
<variant> unichr(x)
<variant> str()

<question3> Python-да келесі операторлардың қайсысы Операндтар үшін экспоненциалды (қуат) есептеуді орындайды?
<variantright> **
<variant> //
<variant> is
<variant> not in
<variant> \\

<question3> Python-дағы келесі операторлардың қайсысы операндтарға бөлінеді, онда нәтиже ондық нүктеден кейін сандар жойылатын квитанция болып табылады?
<variantright> //
<variant> **
<variant> is
<variant> not in
<variant> %

<question3> Егер оператордың екі жағындағы айнымалылар бірдей нысанды көрсетсе және жалған болса, Python-дағы келесі операторлардың қайсысы шындық ретінде бағаланады?
<variantright> is
<variant> //
<variant> **
<variant> not in
<variant> %

<question3> Операторды қай функция жүктейді >>?
<variantright> op()
<variant> ge ()
<variant> gt ()
<variant> more()
<variant> z()

<question3> Қандай оператор функциямен немесе () жүктелген?
<variantright> |
<variant> ||
<variant> //
<variant> /
<variant> *

<question3> Келесі бағдарлама не береді: i = 0 while i < 3: print i i++ print i+1
<variantright> Error
<variant> 0 2 1 3 2 4
<variant> 0 2 1 3 2 5
<variant> 1 0 2 4 3 5
<variant> 1 0 2 4 3 6

<question3> Егер функция ешқандай мән қайтармаса, қабықта орындалған кезде қандай мән көрсетіледі?
<variantright> None
<variant> bool
<variant> void
<variant> int
<variant> var

<question3> Python туралы келесі не дұрыс?
<variantright> Python - бұл жоғары деңгейлі, интерпретацияланған, интерактивті және объектіге бағытталған сценарий тілі.
<variant> Python оқуға оңай болатындай етіп жасалған.
<variant> ол ағылшын кілт сөздерін жиі қолданады, ал басқа тілдер тыныс белгілерін қолданады және басқа тілдерге қарағанда синтаксистік құрылымдар аз.
<variant> басқа тілдер тыныс белгілерін қолданады және басқа тілдерге қарағанда синтаксистік құрылымдар аз
<variant> ол ағылшын кілт сөздерін жиі қолданады

<question3> Python туралы келесі қайсысы дұрыс?
<variantright> Функционалды және құрылымдық бағдарламалау әдістерін, сондай-ақ OOП қолдайды.
<variant> оны сценарий тілі ретінде пайдалануға болады немесе үлкен қосымшаларды құру үшін байт кодына құрастыруға болады.
<variant> өте жоғары деңгейдегі динамикалық деректер түрлерін ұсынады және динамикалық типтерді тексеруді қолдайды.
<variant> үлкен қосымшаларды құру үшін байт кодына құрастыруға болады.
<variant> Функционалды және құрылымдық бағдарламалау әдістерін қолдайды

<question3> Python туралы келесі қайсысы дұрыс?
<variantright> ол автоматты қоқыс жинауды қолдайды және оны C, C ++, COM, ActiveX, CORBA және Java-мен оңай біріктіруге болады.
<variant> оны C, C ++, COM, ActiveX, CORBA және Java-мен оңай біріктіруге болады.
<variant> ол автоматты қоқыс жинауды қолдайды
<variant> Java-мен оңай біріктіруге болады
<variant> ол автоматты қоқыс жинауды қолдамайды

<question3> Python үшін келесі орта айнымалыларының қайсысы Python аудармашысына бағдарламаға импортталған модуль файлдарын қайда орналастыру керектігін айтады?
<variantright> PYTHONPATH
<variant> PYTHONSTARTUP
<variant> PYTHONCASEOK
<variant> PYTHONHOME
<variant> PYTHONHOMES

<question3> Python үшін келесі орта айнымалыларының қайсысында Python бастапқы коды бар инициализация файлының жолы бар?
<variantright> PYTHONSTARTUP
<variant> PYTHONPATH
<variant> PYTHONCASEOK
<variant> PYTHONHOME
<variant> PYTHONHOMES

<question3> Windows жүйесінде Python үшін келесі қоршаған орта айнымалыларының қайсысы Python-ны импорттау мәлімдемесінде регистрді ескерместен бірінші матчты табуға нұсқау үшін қолданылады?
<variantright> PYTHONCASEOK
<variant> PYTHONSTARTUP
<variant> PYTHONPATH
<variant> PYTHONHOME
<variant> PYTHONHOMES

<question3> Python үшін келесі қоршаған орта айнымалыларының қайсысы модульді іздеудің балама әдісі болып табылады?
<variantright> PYTHONHOME
<variant> PYTHONSTARTUP
<variant> PYTHONCASEOK
<variant> PYTHONPATH
<variant> PATH

<question3> Python-да қандай модуль тұрақты өрнектерді қолдайды?
<variantright> re
<variant> regex
<variant> pyregex
<variant> None of the above
<variant> Null

<question3> Python-да келесі деректер түрлерінің қайсысы қолдау көрсетпейді?
<variantright> Slice
<variant> String
<variant> List
<variant> Numbers
<variant> Numbers , List , String

<question3> Python-да келесі деректер түрлерінің қайсысы қолдау көрсетпейді?
<variantright> Generics
<variant> Dictionary
<variant> Tuple
<variant> List
<variant> Lists

<question3> Қандай мән шығарады print str, если str = 'Hello World!'?
<variantright> Hello World!
<variant> Error
<variant> str
<variant> Null
<variant> List

<question3> Қандай мән шығарады print str [0], если str = 'Hello World!'?
<variantright> H
<variant> Hello World!
<variant> ello World!
<variant> Error 256
<variant> Null

<question3> Қандай мән шығарады print str [2: 5], если str = 'Hello World!'?
<variantright> llo
<variant> H
<variant> llo World!
<variant> Error 256
<variant> Null

<question3> Қандай мән шығарады print str [2:], если str = 'Hello World!'?
<variantright> llo World!
<variant> H
<variant> llo
<variant> Error 256
<variant> Null

<question3> Қандай мән шығарады print str * 2, если str = 'Hello World!'?
<variantright> Hello World!Hello World!
<variant> Hello World! * 2
<variant> Hello World!
<variant> Error 256
<variant> Null

<question3> Басып шығару тізімін не көрсетеді, егер list = ['abcd', 786, 2.23, 'john', 70.2]?
<variantright> ['abcd', 786, 2.23, 'john', 70.2]
<variant> abcd
<variant> Error
<variant> ['abcd', 'john']
<variant> ['abcd', 786, 2.23, 'john']

<question3> Басып шығару тізімін не көрсетеді [0], если list = ['abcd', 786, 2.23, 'john', 70.2]?
<variantright> abcd
<variant> ['abcd', 786, 2.23, 'john', 70.2]
<variant> Error
<variant> ['abcd', 'john']
<variant> ['abcd', 786, 2.23, 'john']

<question3> Басып шығару тізімін не көрсетеді [1: 3], если list = ['abcd', 786, 2.23, 'john', 70.2]?
<variantright> [786, 2.23]
<variant> abcd
<variant> ['abcd', 786, 2.23, 'john', 70.2]
<variant> [2.23, 'john', 70.2]
<variant> ['abcd', 'john']

<question3> Басып шығару тізімін не көрсетеді [2:], если list = ['abcd', 786, 2.23, 'john', 70.2]?
<variantright> [2.23, 'john', 70.2]
<variant> abcd
<variant> [786, 2.23]
<variant> ['abcd', 786, 2.23, 'john', 70.2]
<variant> ['abcd', 'john']

<question3> Бұл шығарады print tinylist * 2, если tinylist = [123, 'john']?
<variantright> [123, 'john', 123, 'john']
<variant> [123, 'john'] * 2
<variant> Error
<variant> Null
<variant> ['abcd', 'john']

<question3> Бұл шығарады print tinylist * 2, если tinylist = [123, 'john']?
<variantright> [123, 'john', 123, 'john']
<variant> [123, 'john'] * 2
<variant> Error
<variant> Null
<variant> 3

<question3> Python-да тізбелегендер туралы не дұрыс?
<variantright> алайда, тізімдерден айырмашылығы, түйіндер жақшаға салынған.
<variant> кортеж үтірмен бөлінген бірқатар мәндерден тұрады.
<variant> тізімге ұқсас бірқатар мәндерден тұрады
<variant> кортеж - бұл тізімге ұқсас дәйектілік деректерінің басқа түрі.
<variant> кортеж үтірмен бөлінген және тізімге ұқсас бірқатар мәндерден тұрады

<question3> Что будет на выходе из списка печати, если tuple = ('abcd', 786, 2.23, 'john', 70.2)?
<variantright> ('abcd', 786, 2.23, 'john', 70.2)
<variant> ('abcd',  2.23, 'john', 75)
<variant> ('abcd', 786, 2.23)
<variant> ('abcd', 786, 2.23, 'john', 75)
<variant> (786, 2.23, 'john', 75)

<question3> Шығу мәні кезінде не болады print tuple [0], если tuple = ('abcd', 786, 2.23, 'john', 70.2)?
<variantright> abcd
<variant> ('abcd', 786, 2.23, 'john', 70.2)
<variant> ('abcd', 786, 2.23)
<variant> ('abcd', 786, 2.23, 'john', 75)
<variant> (786, 2.23, 'john', 75)

<question3> Каков результат печати кортежа [1: 3], если кортеж = ('abcd', 786, 2.23, 'john', 70.2)?
<variantright> (786, 2,23)
<variant> abcd
<variant> ('abcd', 786, 2.23, 'john', 70.2)
<variant> ('abcd', 786, 2.23, 'john', 75)
<variant> Null

<question3> Python-да жеке функцияны құру үшін қандай кілт сөз қолданылады?
<variantright> def
<variant> function
<variant> define
<variant> fun
<variant> Null

<question3> Жоғарыда айтылғандардың қайсысы DocString ерекшеліктері болып табылады?
<variantright> Құжаттаманы Python модульдерімен, функцияларымен, сыныптарымен және әдістерімен байланыстырудың ыңғайлы әдісін ұсынады.
<variant> Құжаттар жолдарына объектілердегі __doc__ атрибуты арқылы қол жеткізуге болады.
<variant> Әдістерімен байланыстырудың ыңғайлы әдісін ұсынады.
<variant> Барлық функцияларда құжаттама жолы болуы керек
<variant> Құжаттаманы модульдермен байланыстырудың ыңғайлы әдісін ұсынады

<question3> Функция сынып ішінде анықталған кезде не шақырылады?
<variantright> Method
<variant> Another function
<variant> Class
<variant> Module
<variant> String

<question3> Python-да id () функциясын қолдану дегеніміз не?
<variantright> Id объектінің сәйкестігін қайтарады
<variant> құжаттаманы модульдермен байланыстырудың ыңғайлы әдісін ұсынады
<variant> Құжаттар жолдарына қол жеткізу
<variant> әр нысанның бірегей идентификаторы жоқ
<variant> қалта жолдарына кіру

<question3> Математикалық функцияны көрсетіңіз?
<variantright> sqrt()
<variant> rhombus()
<variant> ad d()
<variant> from buffer()
<variant> pi anonymous

<question3> Python жұмыс уақытында анонимді функцияларды құруды қолдайды
<variantright> Lambda
<variant> anonymous
<variant> pi
<variant> Null
<variant> integer

<question3> Құрамында не бар os.name?
<variantright> операциялық жүйеден импортталған тәуелді модульдің атауы
<variant> os модулінің мекенжайы
<variant> жоғарыда аталғандардың ешқайсысы
<variant> қате, ол болуы керек еді os.name ()
<variant> құжаттар жолдарына қол жеткізу

<question3> Бұл print (os.geteuid ()) нені басып шығарады?
<variantright> ағымдағы процесс пайдаланушысының идентификаторы
<variant> ағымдағы процесс тобының идентификаторы
<variant> топ идентификаторы да, ағымдағы процестің пайдаланушысы да
<variant> жоғарыда көрсетілгендердің ешқайсысы
<variant> құжаттар жолдарына қол жеткізу

<question3> Бұл os.getlogin() қайтарады?
<variantright> жүйеге кірген ағымдағы пайдаланушының аты
<variant> басқа пайдаланушы ретінде кіру формасын алады
<variant> супер пайдаланушының аты
<variant> файл жолдарына кіру
<variant> құжаттар жолдарына қол жеткізу

<question3> Os.close(f) не істейді?
<variantright> F файл дескрипторын жабу
<variant> А процесін аяқтау, егер а жауап бермесе
<variant> f процесін аяқтаңыз
<variant> файл көрсеткішінің файлдың соңына қаншалықты жақын екенін көрсететін бүтін санды қайтару
<variant> бүтін санды қайтару

<question3> os.fchmod (fd, mod<variant> не істейді?
<variantright> файлға кіру құқығының биттерін өзгертіңіз
<variant> файлға немесе каталогқа кіру құқығының биттерін өзгертіңіз
<variant> жоғарыда аталғандардың ешқайсысы
<variant> каталогтың рұқсат биттерін өзгерту
<variant> қалта рұқсаттарының биттерін өзгерту

<question3> Файл дескрипторын пайдаланып файлдан деректерді оқу үшін келесі функциялардың қайсысын қолдануға болады?
<variantright> os.read ()
<variant> os.quick_read ()
<variant> os.scan ()
<variant> os.reader ()
<variant> reader ()

<question3> Келесіден қай нұсқа ағымдағы жұмыс каталогын білдіретін жолды қайтарады?
<variantright> os.getcwd ()
<variant> os.cwd ()
<variant> os.getpwd ()
<variant> os.pwd ()
<variant> getpwd ()

<question3> os.link () қандай жұмыс атқарады?
<variantright> қатты сілтеме жасайды
<variant> символдық шешімді көрсетеді
<variant> символдық сілтеме жасаңыз
<variant> жұмсақ сілтеме жасаңыз
<variant> жұмсақ сілтемені жою

<question3> Каталогты құру үшін келесіден не пайдалануға болады?
<variantright> os.mkdir ()
<variant> os.creat_dir ()
<variant> os.create_dir ()
<variant> os.make_dir ()
<variant> make_dir ()

<question3> Символдық сілтеме жасау үшін келесіден не қолдануға болады?
<variantright> os.symlink ()
<variant> os.symb_link ()
<variant> os.symblin ()
<variant> os.ln ()
<variant> make_dir ()

<question3> Келесі бағдарлама нені көрсетеді? import math print(math.floor(3.4))
<variantright> 3
<variant> 4.0
<variant> 4
<variant> 3.0
<variant> 30

<question3> Келесі бағдарлама нені көрсетеді? print(math.copysign(3, -1))
<variantright> -3,0
<variant> -3
<variant> 1.0
<variant> 1
<variant> 5

<question3> Орындау кезінде не көрсетіледі import math print(math.fabs(-3.4))
<variantright> 3.4
<variant> 3
<variant> -3 
<variant> -3.4
<variant> 4

<question3> abs () функциясы math.fabs ()-бен бірдей?
<variantright> кейде
<variant> әрқашан
<variant> ешқашан
<variant> ешқашан немесе әрқашан
<variant> кейде немесе әрқашан

<question3> Қай мән қайтарады math.fact (6)?
<variantright> 6
<variant> 720
<variant> [1, 2, 3, 6]
<variant> error
<variant> 860

<question3> Қай мән қайтарады x, егер x = math.factorial (0)?
<variantright> 1
<variant> 0 
<variant> 6
<variant> 0.1
<variant> error

<question3> Қай мән қайтарады math.factorial (4.0)  Python-да?
<variantright> 24
<variant> 25
<variant> 1
<variant> error
<variant> 21

<question3> Қай мән қайтарады math.floor (0o10)  Python-да?
<variantright> 8
<variant> 0
<variant> 9
<variant> 10
<variant> 45

<question3> Бұл math.frexp (x) функциясын қайтарады?
<variantright> мантисса және X көрсеткіші бар жиынтық
<variant> мантисса және X көрсеткіші бар тізім
<variant> мантисса x бар жиынтық
<variant> x дәрежесінің көрсеткіші бар тізім
<variant> y дәрежесінің көрсеткіші бар тізім

<question3> Sys.argv -тегі әр элементтің түрі қандай?
<variantright> string
<variant> tuple
<variant> list
<variant> set
<variant> sets

<question3> sys.argv ұзындығы қандай?
<variantright> number of arguments + 1
<variant> number of arguments - 1
<variant> number of arguments
<variant> number of arguments - 2
<variant> number of arguments  + 2

<question3> Функция тақырыбында кілт сөз дәлелдері қалай көрсетіледі?
<variantright> Екі жұлдыз, одан кейін жарамды идентификатор
<variant> Бір жұлдыз, одан кейін жарамды идентификатор
<variant> екі астын сызу таңбасы, одан кейін жарамды идентификатор
<variant> бір астын сызу, содан кейін жарамды идентификатор
<variant> астын сызудың екі таңбасы және жарамды идентификатор

<question3> Функцияға бір шақыруда функцияға қанша кілт сөз аргументтерін беруге болады?
<variantright> нөл немесе одан көп
<variant> бір немесе одан көп
<variant> бір
<variant> екі
<variant> үш

<question3> Функция тақырыбында айнымалы ұзындықтың аргументтерді қалай көрсетіледі?
<variantright> бір жұлдызша, содан кейін жарамды идентификатор
<variant> бір астын сызу, содан кейін жарамды идентификатор
<variant> Екі жұлдыз, одан кейін жарамды идентификатор
<variant> екі астын сызу таңбасы, одан кейін жарамды идентификатор
<variant> астын сызудың екі таңбасы және жарамды идентификатор

<question3> Python стандартты кітапханасындағы қай модуль пәрмен жолынан алынған параметрлерді талдайды?
<variantright> getopt
<variant> os
<variant> getarg
<variant> main
<variant> integer

<question3> sys.argv қандай тип?
<variantright> list
<variant> tuple
<variant> string
<variant> set
<variant> integer

<question3> Қандай мән сақталады sys.argv [0]?
<variantright> бағдарламаның атауы
<variant> бірінші дәлел
<variant> сіз оған қол жеткізе алмайсыз
<variant> нөлдік
<variant> екінші дәлел

<question3> Әдепкі дәлелдер функция тақырыбында қалай көрсетіледі?
<variantright> тең белгісі және әдепкі мәні бар идентификатор
<variant> кері тырнақшалардағы әдепкі мәннен кейін идентификатор (")
<variant> квадрат жақшадағы әдепкі мәннен кейін идентификатор ([])
<variant> идентификатор, содан кейін (*)
<variant> идентификатор, содан кейін (//) әдепкі мәні

<question3> Remove () дұрыс синтаксисі қандай?
<variantright> remove(file_name)
<variant> remove(() , file_name))
<variant> remove(new_file_name, current_file_name,)
<variant> remove
<variant> remove(new_file_name and current_file_name,)

<question3> Файлдардағы seek () әдісінің қандай пайдасы бар?
<variantright> файлдың ағымдағы орнын ауыстыру бойынша орнатады
<variant> офсеттік файлдың алдыңғы орнын белгілейді
<variant> файлдағы файлдың ағымдағы орнын белгілейді
<variant> ағымдағы файл орнын қалтада орнатады
<variant> орын ауыстыру бойынша қалтаның алдыңғы орнын белгілейді

<question3> Файлдағы truncate () әдісінің қандай пайдасы бар?
<variantright> файл өлшемін қиып алады
<variant> Файл өлшемін жояды
<variant> файл мазмұнын жояды
<variant> қалта мазмұнын жояды
<variant> қалта өлшемін жояды

<question3> Келесі режимдердің қайсысы екілік мәліметтерге қатысты болады?
<variantright> b
<variant> r
<variant> s
<variant> d
<variant> z

<question3> Open () функциясының дұрыс синтаксисі қандай?
<variantright> file object = open(file_name [, access_mode][, buffering])
<variant> file = open(file_name [, access_mode][, buffering])
<variant> file objects = open(file_folder_5)
<variant> file object = open(file_file)
<variant> file object = open(file_name)

<question3> file.writelines () дұрыс жазылған синтаксисінің нұсқасы?
<variantright> fileObject.writelines(sequence)
<variant> file.writelines(sequence)
<variant> fileObject.writelines()
<variant> folder.writelines(sequence)
<variant> folderObject.writelines()

<question3> file.readlines ()дұрыс жазылған синтаксисінің нұсқасы?
<variantright> fileObject.readlines (sizehint)
<variant> fileObject.readlines(sequence)
<variant> fileObject.readlines()
<variant> folderObject.writelines()
<variant> folder.writelines(sequence)

<question3> Файлдарды өңдеу кезінде "r, a" термині нені білдіреді?
<variantright> оқу, қосу
<variant> қосу, оқу
<variant> оқу арқылы оқу
<variant> қосу, қосу арқылы
<variant> жою, оқу

<question3> Файлдарды өңдеуде "w" қандай пайдасы бар?
<variantright> Жазу
<variant> Оқу
<variant> Қосу
<variant> Ауыстыру 
<variant> Жою

<question3> Пайдасы қандай "а" өңдеуге файлдарды?
<variantright> Қосу
<variant> Оқу
<variant> Жазу
<variant> Ауыстыру
<variant> Жою

<question3> Файлдың барлық таңбаларын оқу үшін қандай функция қолданылады?
<variantright> Read()
<variant> Readcharacters()
<variant> Readall()
<variant> Readchar()
<variant> Delete

<question3> Файлдан бір жолды оқу үшін қандай функция қолданылады?
<variantright> Readlines()
<variant> Readstatement()
<variant> Readfullline()
<variant> Readline()
<variant> Delete

<question3> Барлық таңбаларды Файлға жазу үшін қандай функция қолданылады?
<variantright> write()
<variant> writecharacters()
<variant> writeall()
<variant> writechar()
<variant> Delete

<question3> Жолдар тізімін Файлға жазу үшін қандай функция қолданылады?
<variantright> writeline ()
<variant> writelines()
<variant> writestatement()
<variant> writefullline()
<variant> writechar()

<question3> Python-да файлды жабу үшін қандай функция қолданылады?
<variantright> Close()
<variant> Stop()
<variant> End()
<variant> Closefile()
<variant> Delete

<question3> Жоғарыда айтылғандардың қайсысы файлдағы екілік форматта жазу және оқу режимдері болып табылады?
<variantright> wb+
<variant> w
<variant> wb
<variant> w+
<variant> s +

<question3> Төменде келтірілгендердің нұсқалардын файлды ашуға рұқсат етілген режим емес?
<variantright> rw
<variant> г +
<variant> w +
<variant> ab
<variant> z

<question3> S1 S2 жолының бар-жоғын тексеру үшін қай нұсқаны қолданамыз
<variantright> s1.__contains__(s2)
<variant> s1.contains(s2)
<variant> si.in(s2)
<variant> si.in(s3)
<variant> s1.contains(s2+s1)

<question3> Келесі Python бағдарламасы не береді? mylist = [1, 2, 3] print(my list [1:])
<variantright> [2, 3]
<variant> [3, 2]
<variant> [2]
<variant> [3]
<variant> [4]

<question3> Python-да келесі деректер түрлерінің қайсысы қолдау көрсетпейді?
<variantright> Generics
<variant> Dictionary
<variant> List
<variant> Tuple
<variant> integer

<question3> cmp (3, 1) нәтижесі қандай ?
<variantright> 1
<variant> 2
<variant> 0
<variant> False
<variant> True

<question3> String.ascii_letters-ке орындау нәтижесі де қай нұсқаға қол жеткізуге болады?
<variantright> string.ascii_lowercase+string.ascii_upercase
<variant> string.ascii_lowercase_string.digits
<variant> string.letters
<variant> string.lowercase_string.upercase
<variant> string.folders
`