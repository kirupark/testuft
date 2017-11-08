
Orangehrm_Addemployee "Kiruba","kirupa","1001"
Orangehrm_Logout
'Getting Test Case to be executed
'Dim StrExcelFilePath
'Dim StrSheetName
'Dim IntTotalRows
'Dim intTCColumn


'StrTestLabPath = "S:\TestAutomation\KTSessions\GIT_Integration\TestLab\TestLab.xlsx"
'strTestCasePath = "S:\TestAutomation\KTSessions\GIT_Integration\TestSuite"
Orangehrm_Login "Admin","admin"
Fn_ClosingBrowsers
Fn_LaunchBrowser "iexplore.exe","http://opensource.demo.orangehrmlive.com/"
'StrSheetName = "TestLab"
'Set Oxl=Createobject("Excel.application")
'Set OTestLab=Oxl.workbooks.Open(StrTestLabPath)
'Set oTestLabSheet=OTestLab.Worksheets(StrSheetName)
'
'IntTotalRows=oTestLabSheet.Usedrange.Rows.count
'For i = 2 To IntTotalRows
'	If Trim(oSheet.Cells(i,2).Value)  = "Y" Then
'		strTCname = Trim(oSheet.Cells(i,1).Value
'		Set oTestCase = Oxl.workbooks.Open(strTestCasePath)
'		Set oTestCaseSheet = oTestCase.Worksheets(TestCaseSheet)
'		intTCColumn = oTestCaseSheet.Usedrange.columns.count
'		For j = 2 To intTCColumn
'		  Execute "Call" & oTestCaseSheet.Cells(
'		Next
'	
'	End If
'Next

