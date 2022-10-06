
print("Podaj liczbę: ")
num = input()
f = open("dane.txt", "a")
f.write(num)
f.close()
f = open("wyniki.txt", "r")
j = True
while j:
    x = f.read()
    if x != "":
        print(x)
        j = False
    f.close()



