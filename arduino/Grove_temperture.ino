// Project Seven - temperature
//
// URL: http://www.seeedstudio.com/wiki/Project_Seven_-_Temperature
// 
//

int a;
int del=1000; // duration between temperature readings
float temperature;
int B=3975; 
float resistance;

void setup()
{
  // Serial ポートの再初期化(通常はPCからArduinoの書き込み)
  Serial.begin(9600);
}

void loop()
{
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a; 
  temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  delay(del);
  Serial.println(temperature);
}
