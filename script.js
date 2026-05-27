function saveData() {

  const version =
    document.getElementById("versionInput").value;

  const download =
    document.getElementById("downloadInput").value;

  const status =
    document.getElementById("statusInput").value;

  const notes =
    document.getElementById("patchNotes").value;

  alert(
    "Admin data saved locally.\n\n" +
    "Version: " + version + "\n" +
    "Status: " + status
  );

  console.log({
    version,
    download,
    status,
    notes
  });

}
