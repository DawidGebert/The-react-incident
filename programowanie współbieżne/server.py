import os
# while [ true ]
# do
#    if [ -s ./dane.txt ]
#    then value=`cat dane.txt` ;
#     echo "$(( $value + 1 ))" > wyniki.txt;
#     else echo "loading...";
#    fi
# done

while True:
   if os.path.getsize("dane.txt") == 0:
      f = open("dane.txt", "r")
      num = f.read()
      f.close()
      f = open("dane.txt", "w")
      f.close()
      f = open("wyniki.txt", "w")
      f.write(num + 1)
      f.close()