/**
 * Controller que manipula todas as ações e validações do componente personalizado de slide
 * @author Vinicius Goulart Cardozo
 */
app.controller("CarouselCtrl",function($http, $scope){
    $scope.selected = {} //Referência do item selecionado
    $scope.selectedIndicator = {} //Referência do seletor ativo

    /**
     * Requisição dos dados que serão inseridos no slide show
     */
    $http
        .get("conteudo/conteudo.json")
        .then((response) => {

            $scope.itens = response.data.itens
            $scope.indicators = response.data.itens.map(x => {x.indicator.selectionClass = 'non-selected'; return x.indicator})
            $scope.select(0)
        })
        .catch(x => alert("Falha ao carregar os dados"))
    
    /**
     * Função responsável por trocar o objeto selecionado para exibição
     */
    $scope.select = index => { 
        if($scope.selectedIndicator) {
            $scope.selectedIndicator.selectionClass = 'non-selected'
            $scope.selected = $scope.itens[index]
            $scope.selectedIndicator = $scope.indicators[index]
            $scope.selectedIndicator.selectionClass = 'selected'
        }
    }

    /**
     * Lógica de seleção para as ações de next e prior
     */
    $scope.changeContent = side => {
        $scope.animateTransition()
        let idx = $scope.itens.indexOf($scope.selected)
        if(side == "right"){
            if(idx == $scope.itens.length -1)
                idx = 0
            else
                idx++
        } else {
            if(idx == 0)
                idx = $scope.itens.length -1
            else
                idx--
        }
        $scope.select(idx)
    }

    /**
     * Animação de transição na troca do item selecionado
     */
    $scope.animateTransition = () => {
        $("#content-block").css("opacity", "0").animate({opacity:'1'},"fast")
        return
 }
})