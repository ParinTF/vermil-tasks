; Vermil was called "Vermil Tasks" until 2.0.1. A new product name installs beside the old one, so the installer
; removes the old copy (its data lives in AppData under the identifier and is left alone) and carries "start with
; Windows" over to the new entry.
Var OldAutostart

!macro NSIS_HOOK_PREINSTALL
  StrCpy $OldAutostart ""
  ReadRegStr $OldAutostart HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Vermil Tasks"
  Delete "$LOCALAPPDATA\Vermil Tasks\uninstall.exe"
  RMDir /r "$LOCALAPPDATA\Vermil Tasks"
  DeleteRegKey HKCU "Software\Microsoft\Windows\CurrentVersion\Uninstall\Vermil Tasks"
  DeleteRegKey HKCU "Software\vermil\Vermil Tasks"
  Delete "$SMPROGRAMS\Vermil Tasks.lnk"
  Delete "$DESKTOP\Vermil Tasks.lnk"
  DeleteRegValue HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "Vermil Tasks"
!macroend

!macro NSIS_HOOK_POSTINSTALL
  ${If} $OldAutostart != ""
    WriteRegStr HKCU "Software\Microsoft\Windows\CurrentVersion\Run" "${PRODUCTNAME}" '"$INSTDIR\${MAINBINARYNAME}.exe" --hidden'
  ${EndIf}
!macroend
