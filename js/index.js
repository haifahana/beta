$('.card-fer').click(function() {
    //alert('vous avez sélectionner la feraille');
    let priceFer = document.getElementById("priceFer").innerHTML.replace('$', '');
    let nbFer = prompt('Tapez le nombre de ferrailles que vous souhaitez commander.');
    //console.log(nbFer);
    //alert(nbFer);
    let nbFerPrice = nbFer * priceFer;
    alert('Le prix total de ferrailles que vous souhaitez commander est donc de : ' + nbFerPrice + '$');
});

$('.card-eng').click(function() {
    //alert('vous avez sélectionner engrais biologiques');
    let priceEng = document.getElementById("priceEng").innerHTML.replace('$', '');
    let nbEng = prompt('Tapez le nombre des engrais biologique que vous souhaitez commander.');
    //console.log(nbFer);
    //alert(nbFer);
    let nbEngPrice = nbEng * priceEng;
    alert('Le prix total des engrais biologique que vous souhaitez commander est donc de : ' + nbEngPrice + '$');
  
});

// jquery -> une amélioration de javascript qui permet de faire des choses + en profondeur et plus rapidment, elle est souvent utilisée pour les sites qui nécessitent beaucoup d'interaction au niveau utilisateur, graphiquement etc...