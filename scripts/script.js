/*Für dynamic tabellen*/
$(document).ready(function(){
    var i = 1;

    // Zeile hinzufügen für die erste Tabelle
    $('#addRow').click(function(e){
        e.preventDefault();
        i++;
        $('#dynamicard1').append('<tr id="row1_'+i+'"><td class="col-3"><input type="text" name="nachname[]" class="form-control"><label for="nachname">Nachname</label></td><td class="col-3"><input type="text" name="vorname[]" class="form-control"><label for="vorname">Vorname</label></td><td class="col-3"><input type="text" name="email[]" class="form-control"><label for="email">E-Mail</label></td><td class="col-3"><input type="text" name="position[]" class="form-control"><label for="position">Position</label></td><td><button type="button" id="btn1_'+i+'" class="btn btn-danger remove_row">-</button></td></tr>');
    });

    // Zeile entfernen für die erste Tabelle
    $(document).on('click', '.remove_row', function(){
        var row_id = $(this).attr("id").split('_')[1]; // Split ID und wähle die Nummer
        $('#row1_'+row_id).remove();
    });
});

$(document).ready(function(){
    var j = 1;

    // Zeile hinzufügen
    $('#add').click(function(e){
        e.preventDefault();
        j++;
        $('#dynamicadd').append('<tr id="row'+j+'"><td class="col-3"><input type="text" name="version[]" class="form-control"><label for="version">Version</label></td><td class="col-3"><input type="text" name="anzl[]" class="form-control"><label for="anzl">Anzahl-Lizenzen</label></td><td class="col"><input type="text" name="pe[]" class="form-control"><label for="pe">PRESTIGE-Seriennummer</label></td><td><button type="button" id="'+j+'" class="btn btn-danger remove_row">-</button></td></tr>');
    });

    // Zeile entfernen
    $(document).on('click', '.remove_row', function(){
        var row_id = $(this).attr("id");
        $('#row'+row_id).remove();
    });
});



/*For Lizenz-Erweiterung*/
/*$(document).ready(function() {
    var g = 1;

    function createNewRow(g) {
        return `<div id="row${g}">
                <hr class="btnTrans" style="border-top: 5px dotted #808080"></hr>
                <div class="col forms-footer-body" id="dynamicadd2">
                <div class="row">
                <div class="col">
                <input type="number" name="peServer[]" id="peServer" class="form-control">
                <label for="peServer">PE-Server</label>
                </div>
                <div class="col">
                <input type="number" name="user[]" id="user" class="form-control">
                <label for="user">User</label>
                </div>
                <div class="col">
                <input type="number" name="prEngn[]" id="prEngn" class="form-control">
                <label for="prEngn">PrintEngine</label>
                </div>
                <div class="col">
                <input type="number" name="dpEngn[]" id="dpEngn" class="form-control">
                <label for="dpEngn">DisplayEngine</label>
                </div>
                <div class="col">
                <input type="number" name="evHndl[]" id="evHndl" class="form-control">
                <label for="evHndl">EventHandler</label>
                </div>
                </div>
                <div id="accordion2${g}">
                <div class="card footersCard">
                <div class="card-header" id="headingOne1${g}">
                <div class="row">
                <div class="col">
                <h5 class="mb-0 mlt-label">Multiserver-Lizenz-Erweiterungen</h5>
                </div>
                <div class="col-1">
                <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseOne1${g}" aria-expanded="true" aria-controls="collapseOne1${g}" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>                                            
                <div id="collapseOne1${g}" class="collapse" aria-labelledby="headingOne1${g}" data-parent="#accordion2${g}">
                <div class="card-body">
                <div class="row">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="number" class="form-control" id="tubMlt${g}" name="mlt">
                <label for="tubMlt${g}">Anzahl-Server</label>
                </div>
                </form>
                </div>
                <div class="col">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubSum${g}" name="sum">
                <label for="tubSum${g}">Anzahl OperationManager</label>
                </div>
                </form>
                </div>
                <div class="col">
                <select class="form-select form-control typesButton" aria-label="Laufzettel-Art">
                <option selected>Auswählen...</option>
                <option value="1">Hauptinstanz (Standart: 1 App-Server, 1 DB Server)</option>
                <option value="2">Primär Applikations-Server LoadBalancer</option>
                <option value="3">Weiterer Applikations-Server LoadBalancer</option>
                <option value="4">RabbitMQ-Server</option>
                <option value="5">OperationManager-Server</option>
                <option value="6">ImportService-Server</option>
                </select>
                <p>Server-Art</p>
                </div>
                <div class="col">
                <select class="form-select form-control typesButton" aria-label="Laufzettel-Art">
                <option selected>Auswählen...</option>
                <option value="1">Produktiv</option>
                <option value="2">Test</option>
                <option value="3">Demo</option>
                <option value="4">PreProd</option>
                </select>
                <p>Installation-Art</p>
                </div>
                </div>
                <div class="col">
                <form>
                <textarea class="form-control" placeholder="Anmerkungen" rows="4"></textarea>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="ftr-form-label">
                <h4>Modul-Erweiterungen</h4>
                </div>
                <div id="accordion3${g}">
                <div class="card">
                <div class="card-header" id="headingOne2${g}">
                <div class="row">
                <div class="col">
                <h5 class="mb-0 mlt-label">Servermodule</h5>
                </div>
                <div class="col-1">
                <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseFt${g}" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>                                            
                <div id="collapseFt${g}" class="collapse" aria-labelledby="headingOne2${g}" data-parent="#accordion3${g}">
                <div class="card-body">
                <div class="row">
                <div class="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck1${g}">
                <label class="form-check-label" for="serverCheck1${g}">
                LivePreview
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck2${g}">
                <label class="form-check-label" for="serverCheck2${g}">
                XML Artikelimport
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck3${g}">
                <label class="form-check-label" for="serverCheck3${g}">
                ESL Electronic Shelf Label
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck4${g}">
                <label class="form-check-label" for="serverCheck4${g}">
                Analyze History
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck5${g}">
                <label class="form-check-label" for="serverCheck5${g}">
                Mehrartikelplakate
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck6${g}">
                <label class="form-check-label" for="serverCheck6${g}">
                CrossMerchandising
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck7${g}">
                <label class="form-check-label" for="serverCheck7${g}">
                MobileClient (MobileBrowser)
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck8${g}">
                <label class="form-check-label" for="serverCheck8${g}">
                LiveInfo & eLearning
                </label>
                </div>
                </div>
                <div class="vl second"></div>
                <div class="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck9${g}">
                <label class="form-check-label" for="serverCheck9${g}">
                PrintShop
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck10${g}">
                <label class="form-check-label" for="serverCheck10${g}">
                AppServices
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck11${g}">
                <label class="form-check-label" for="serverCheck11${g}">
                CrossPrinting
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck12${g}">
                <label class="form-check-label" for="serverCheck12${g}">
                ShelfManager
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck13${g}">
                <label class="form-check-label" for="serverCheck13${g}">
                OnlineNews Ticker (RSS-Feed)
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="serverCheck14${g}">
                <label class="form-check-label" for="serverCheck14${g}">
                TextBausteine
                </label>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="card">
                <div class="card-header" id="headingOne3${g}">
                <div class="row">
                <div class="col">
                <div class="row">
                <div class="col-3">
                <h5 class="mb-0 mlt-label">LiveInfo Token</h5>
                </div>
                <div class="col supText">
                <p class="supTextChild"> - mit Modul Liveinfo & eLearning</p>
                </div>
                </div>
                </div>
                <div class="col-1">
                <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseFt2${g}" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>                                       
                <div id="collapseFt2${g}" class="collapse" aria-labelledby="headingOne3${g}" data-parent="#accordion3${g}">
                <div class="card-body">
                <div class="row">
                <div class="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck1${g}">
                <label class="form-check-label" for="tokenCheck1${g}">
                Mettler
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck2${g}">
                <label class="form-check-label" for="tokenCheck2${g}">
                Bizerba
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck3${g}">
                <label class="form-check-label" for="tokenCheck3${g}">
                Online AG
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck4${g}">
                <label class="form-check-label" for="tokenCheck4${g}">
                iPhone
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck5${g}">
                <label class="form-check-label" for="tokenCheck5${g}">
                SWIsS
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck6${g}">
                <label class="form-check-label" for="tokenCheck6${g}">
                TVG
                </label>
                </div>
                </div>
                <div class="vl third"></div>
                <div class="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck7${g}">
                <label class="form-check-label" for="tokenCheck7${g}">
                ESL SES-Imagotag
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck8${i}">
                <label class="form-check-label" for="tokenCheck8${i}">
                ESL Delfi
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck9${i}">
                <label class="form-check-label" for="tokenCheck9${i}">
                ESL SoluM
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck10${i}">
                <label class="form-check-label" for="tokenCheck10${i}">
                ESL Rainus
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck11${i}">
                <label class="form-check-label" for="tokenCheck11${i}">
                ESL Woutex
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenCheck12-${i}">
                <label class="form-check-label" for="tokenCheck12${i}">
                ESL Hanshow
                </label>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="card">
                <div class="card-header" id="headingOne4${i}">
                <div class="row">
                <div class="col">
                <div class="row">
                <div class="col-3">
                <h5 class="mb-0 mlt-label">LivePreview Token</h5>
                </div>
                <div class="col supTextP">
                <p class="supTextChild"> - mit Modul LivePreview</p>
                </div>
                </div>
                </div>
                <div class="col-1">
                <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseFt3${i}" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>                                    
                <div id="collapseFt3${i}" class="collapse" aria-labelledby="headingOne4${i}" data-parent="#accordion3${i}">
                <div class="card-body">
                <div class="row">
                <div class="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck1${i}">
                <label class="form-check-label" for="tokenPCheck1${i}">
                Mettler
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck2${i}">
                <label class="form-check-label" for="tokenPCheck2${i}">
                Bizerba
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck3${i}">
                <label class="form-check-label" for="tokenPCheck3${i}">
                Online AG
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck4${i}">
                <label class="form-check-label" for="tokenPCheck4${i}">
                iPhone
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck5${i}">
                <label class="form-check-label" for="tokenPCheck5${i}">
                SWIsS
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck6${i}">
                <label class="form-check-label" for="tokenPCheck6${i}">
                TVG
                </label>
                </div>
                </div>
                <div class="vl third"></div>
                <div class="col">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck7${i}">
                <label class="form-check-label" for="tokenPCheck7${i}">
                ESL SES-Imagotag
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck8${i}">
                <label class="form-check-label" for="tokenPCheck8${i}">
                ESL Delfi
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck9${i}">
                <label class="form-check-label" for="tokenPCheck9${i}">
                ESL SoluM
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck10${i}">
                <label class="form-check-label" for="tokenPCheck10${i}">
                ESL Rainus
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck11${i}">
                <label class="form-check-label" for="tokenPCheck11${i}">
                ESL Woutex
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="tokenPCheck12${i}">
                <label class="form-check-label" for="tokenPCheck12${i}">
                ESL Hanshow
                </label>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="card">
                <div class="card-header" id="headingOne5${i}">
                <div class="row">
                <div class="col">
                <div class="row">
                <div class="col-3">
                <h5 class="mb-0 mlt-label">ESL StoreEngines</h5>
                </div>
                <div class="col supTextP">
                <p class="supTextChild"> - zusätzlich zum Servermodul</p>
                </div>
                </div>
                </div>
                <div class="col-1">
                <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseFt4${i}" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>
                <div id="collapseFt4${i}" class="collapse" aria-labelledby="headingOne5${i}" data-parent="#accordion3${i}">
                <div class="card-body">
                Anzahl der Filialen mit bis zu:
                <div class="row">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl1${i}" name="esl1">
                <label for="tubEsl1${i}">300 ESLEngines</label>
                </div>
                </form>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl2${i}" name="esl2">
                <label for="tubEsl2${i}">1.500 ESLEngines</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl3${i}" name="esl3">
                <label for="tubEsl3${i}">5.000 ESLEngines</label>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl4${i}" name="esl4">
                <label for="tubEsl4${i}">12.000 ESLEngines</label>
                </div>
                </form>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl5${i}" name="esl5">
                <label for="tubEsl5${i}">25.000 ESLEngines</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl6${i}" name="esl6">
                <label for="tubEsl6${i}">40.000 ESLEngines</label>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl7${i}" name="esl7">
                <label for="tubEsl7${i}">60.000 ESLEngines</label>
                </div>
                </form>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl8${i}" name="esl8">
                <label for="tubEsl8${i}">80.000 ESLEngines</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="number" class="form-control" id="tubEsl9${i}" name="esl9">
                <label for="tubEsl9${i}">100.000 ESLEngines</label>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="card">
                <div class="card-header" id="headingOne6${i}">
                <div class="row">
                <div class="col">
                <div class="row">
                <div class="col-3">
                <h5 class="mb-0 mlt-label">API-Controller</h5>
                </div>
                </div>
                </div>
                <div class="col-1">
                <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseFt5${i}" onclick="event.stopPropagation()">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
                </a>
                </div>
                </div>
                </div>
                <div id="collapseFt5${i}" class="collapse" aria-labelledby="headingOne6${i}" data-parent="#accordion3${i}">
                <div class="card-body">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="text" class="form-control package-name" id="tubVt${i}" name="vt">
                <label for="tubVt${i}">Package-Name nach Erstellung der Lizenzdatei hier eintragen (optional)</label>
                </div>
                <div class="form-group">
                <textarea class="form-control" rows="1"></textarea>
                <div class="row">
                <div class="col-2">
                <p>Controller-Typ</p>
                </div>
                <div class="col">
                <p class="lttlT font-weight-bold">Data</p>
                </div>
                </div>
                </div>
                <div class="form-group">
                <textarea class="form-control" rows="1"></textarea>
                <div class="row">
                <div class="col-2">
                <p>Controller-Typ</p>
                </div>
                <div class="col">
                <p class="lttlT font-weight-bold">API</p>
                </div>
                </div>
                </div>
                <div class="form-group">
                <textarea class="form-control" placeholder="Anmerkungen" rows="1"></textarea>
                </div>
                </form>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div class="footer-label">
                <h3 text->Bemerkungen</h3>
                <form>
                <textarea class="footersText form-control" rows="4"></textarea>
                </form>
                <div class="row">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubVtA${i}" name="vta">
                <label for="tubVtA${i}">A: bestellt über (VT)</label>
                </div>
                </form>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="date" class="form-control" id="tubBstD${i}" name="bstD">
                <label for="tubBstD${i}">A1: Bestelldatum</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="text" class="form-control" id="tubCst${i}" name="cst">
                <label for="tubCst${i}">B: Lizenzerstellung (CST)</label>
                </div>
                </div>
                <div class="col">
                <div class="form-group">
                <input type="text" class="form-control" id="tubVrsn${i}" name="vrsn">
                <label for="tubVrsn${i}">B1: Versionsnr. (CST)</label>
                </div>
                </div>
                </div>
                <div class="row">
                <div class="col">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubVerE${i}" name="verE">
                <label for="tubVerE${i}">C: Versionserstellung</label>
                </div>
                </form>
                </div>
                <div class="col">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubAusl${i}" name="ausl">
                <label for="tubAusl${i}">D: Auslieferung</label>
                </div>
                </form>
                </div>
                <div class="col">
                <form>
                <select class="form-select form-control typesButton" aria-label="Auslieferungsart">
                <option selected>Auswählen...</option>
                <option value="1">Upload durch Online</option>
                <option value="2">versendet per E-mail</option>
                <option value="3">Lizenzdatei</option>
                </select>
                <p>D1: Ausliferungsart</p>
                </form>
                </div>
                <div class="col">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubBrchn${i}" name="brchn">
                <label for="tubBrchn${i}">E: Berechnung</label>
                </div>
                </form>
                </div>
                </div>
                <div class="row">
                <div class="col-3">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubRecnN-${i}" name="recnN">
                <label for="tubRecnN-${i}">Rechnungsnummer</label>
                </div>
                </form>
                </div>
                <div class="col-3">
                <form>
                <div class="form-group">
                <input type="text" class="form-control" id="tubLiefN-${i}" name="liefN">
                <label for="tubLiefN-${i}">Lieferscheinnummer</label>
                </div>
                </form>
                </div>
                <div class="col-3">
                <form>
                <select class="form-select form-control typesButton" aria-label="Wartung">
                <option selected>Nein</option>
                <option value="1">Ja</option>
                <option value="2">Nein</option>
                </select>
                <p>Wartung aktualiesiert?</p>
                </form>
                </div>
                </div>
                </div>
                </div>
                <button type="button" id="${i}" class="btn remove_row2">
                - Erweiterung entfernen
                </button>
                </div>
                </div>`;
    }

    $('#addRow2').click(function() {
        i++;
        $('#dynamicadd2').append(createNewRow(i));
    });

    $(document).on('click', '.remove_row2', function() {
        var row_id = $(this).attr("id");
        $('#row' + row_id).remove();
    });

    // Event delegation for dynamically added accordion buttons
    $(document).on('click', '.mltsr', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('.collapse').collapse('toggle');
    });
});

$(document).ready(function(){
        var rowCount = 1;

        //Zeile hinzufügen für Große Tabelle
        $('#addRow2').click(function(e){ //addRow ist "Erweiterungen hinzufügen Button"
            e.preventDefault();
            rowCount++;
            
            var newRow = `
            <div class="row dynamic-row" data-rowid="${rowCount}">
            <hr class="btnTrans" style="border-top: 5px dotted #808080">
            <div class="col forms-footer-body">
            <div class="row">
            <div class="col">
            <input type="number" name="peServer[]" class="form-control">
            <label>PE-Server</label>
            </div>
            <div class="col">
            <input type="number" name="user[]" class="form-control">
            <label>User</label>
            </div>
            <div class="col">
            <input type="number" name="prEngn[]" class="form-control">
            <label>PrintEngine</label>
            </div>
            <div class="col">
            <input type="number" name="dpEngn[]" class="form-control">
            <label>DisplayEngine</label>
            </div>
            <div class="col">
            <input type="number" name="evHndl[]" class="form-control">
            <label>EventHandler</label>
            </div>
            </div>


            <div id="accordion2${rowCount}">
            <div class="card footersCard">
            <div class="card-header" id="headingOne1${rowCount}">
            <div class="row">
            <div class="col">
            <h5 class="mb-0 mlt-label">Multiserver-Lizenz-Erweiterungen</h5>
            </div>
            <div class="col-1">
            <a href="#" class="btn btn-link mltsr" data-toggle="collapse" data-target="#collapseOne1${rowCount}" aria-expanded="true" aria-controls="collapseOne1${rowCount}" onclick="event.stopPropagation()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
            </a>
            </div>
            </div>
            </div>
            <div id="collapseOne1${rowCount}" class="collapse" aria-labelledby="headingOne1${rowCount}" data-parent="#accordion2${rowCount}">
            <div class="card-body">
            <div class="row">
            <div class="col">
            <form>
            <div class="form-group">
            <input type="number" class="form-control" id="tubMlt" name="mlt">
            <label for="tubMlt">Anzahl-Server</label>
            </div>
            </form>
            </div>
            <div class="col">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" id="tubSum" name="sum">
            <label for="tubSum">Anzahl OperationManager</label>
            </div>
            </form>
            </div>
            <div class="col">
            <select class="form-select form-control typesButton" aria-label="Laufzettel-Art">
            <option selected>Auswählen...</option>
            <option value="1">Hauptinstanz (Standart: 1 App-Server, 1 DB Server)</option>
            <option value="2">Primär Applikations-Server LoadBalancer</option>
            <option value="3">Weiterer Applikations-Server LoadBalancer</option>
            <option value="4">RabbitMQ-Server</option>
            <option value="5">OperationManager-Server</option>
            <option value="6">ImportService-Server</option>
            </select>
            <p>Server-Art</p>
            </div>
            <div class="col">
            <select class="form-select form-control typesButton" aria-label="Laufzettel-Art">
            <option selected>Auswählen...</option>
            <option value="1">Produktiv</option>
            <option value="2">Test</option>
            <option value="3">Demo</option>
            <option value="4">PreProd</option>
            </select>
            <p>Installation-Art</p>
            </div>
            </div>
            <div class="col">
            <form>
            <textarea class="form-control" placeholder="Anmerkungen" rows="4"></textarea>
            </form>
            </div>
            </div>
            </div>
            </div>
            </div>


            <div class="footer-label">
            <h3>Bemerkungen</h3>
            <form>
            <textarea class="footersText form-control" rows="4"></textarea>
            </form>
            <div class="row">
            <div class="col">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" name="vta">
            <label>A: bestellt über (VT)</label>
            </div>
            </form>
            </div>
            <div class="col">
            <div class="form-group">
            <input type="date" class="form-control" name="bstD">
            <label>A1: Bestelldatum</label>
            </div>
            </div>
            <div class="col">
            <div class="form-group">
            <input type="text" class="form-control" name="cst">
            <label>B: Lizenzerstellung (CST)</label>
            </div>
            </div>
            <div class="col">
            <div class="form-group">
            <input type="text" class="form-control" name="vrsn">
            <label>B1: Versionsnr. (CST)</label>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" name="verE">
            <label>C: Versionserstellung</label>
            </div>
            </form>
            </div>
            <div class="col">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" name="ausl">
            <label>D: Auslieferung</label>
            </div>
            </form>
            </div>
            <div class="col">
            <form>
            <select class="form-select form-control typesButton" aria-label="Auslieferungsart">
            <option selected>Auswählen...</option>
            <option value="1">Upload durch Online</option>
            <option value="2">versendet per E-mail</option>
            <option value="3">Lizenzdatei</option>
            </select>
            <p>D1: Ausliferungsart</p>
            </form>
            </div>
            <div class="col">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" name="brchn">
            <label>E: Berechnung</label>
            </div>
            </form>
            </div>
            </div>
            <div class="row">
            <div class="col-3">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" name="recnN">
            <label>Rechnungsnummer</label>
            </div>
            </form>
            </div>
            <div class="col-3">
            <form>
            <div class="form-group">
            <input type="text" class="form-control" name="liefN">
            <label>Lieferscheinnummer</label>
            </div>
            </form>
            </div>
            <div class="col-3">
            <form>
            <select class="form-select form-control typesButton" aria-label="Wartung">
            <option selected>Nein</option>
            <option value="1">Ja</option>
            <option value="2">Nein</option>
            </select>
            <p>Wartung aktualisiert?</p>
            </form>
            </div>
            </div>
            </div>

            
            <button type="button" class="btn remove_row2" data-rowid="${rowCount}">
            - Erweiterung entfernen
            </button>
            </div>
            </div>
        `;
                $('#dynamicadd2').append(newRow);
        });
        $(document).on('click', '.remove_row2', function() {
        var rowId = $(this).data("rowid");
        $('[data-rowid="' + rowId + '"]').remove();
    });
        $(document).on('click', '.mltsr', function(e) {
        e.preventDefault();
        $(this).closest('.card').find('.collapse').collapse('toggle');
    });
});*/

/*For accordion*/
document.addEventListener('DOMContentLoaded', function () {
    var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'));
    var collapseList = collapseElementList.map(function (collapseEl) {
        return new bootstrap.Collapse(collapseEl, {
            toggle: false
        });
    });
 
    document.querySelectorAll('.mltsr').forEach(function (button) {
        button.addEventListener('click', function () {
            var target = button.getAttribute('data-target');
            var index = collapseElementList.findIndex(function (collapseEl) {
                return collapseEl.getAttribute('id') === target.slice(1);
            });
            collapseList[index].toggle();
        });
    });
});*/