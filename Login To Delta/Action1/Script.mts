systemutil.Run "iexplore.exe","http://deltanet.delta.com/"
wait (2)
Browser("Delta Log In").Page("Delta Log In").WebEdit("pf.username").Set Parameter("In_UserName")
wait (2)
Browser("Delta Log In").Page("Delta Log In").WebEdit("pf.pass").Set  Parameter("In_Passward")
wait (2)

Browser("Delta Log In").Page("Delta Log In_2").WebElement("Sign In").Click
If Browser("Deltanet Homepage").Page("Deltanet Homepage").WebButton("Sign out").Exist(30) Then
    reporter.ReportEvent micPass,"Login to the delta application.","Applicationis launched."
Else
    Reporter.ReportEvent micFail,"Login to the delta application.","Applicationis is not launched."
    Exitrun()
End If 

Strtext=Browser("Delta Log In").Page("Deltanet Homepage").Link("Celebrating Chairman's").GetROProperty("Innertext")
msgbox Strtext
systemutil.CloseDescendentProcesses


