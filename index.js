/* eslint-disable */
function main() {

    $('#js-shopping-list-form').submit(function(evt){
        evt.preventDefault();
        let listItem = $("#shopping-list-entry").val();
        console.log(listItem);

        let template = `<li>
        <span class="shopping-item">${listItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`;
        console.log(template)
        $(".shopping-list").append(template);

    })
    $('.shopping-list').on('click', '.shopping-item-toggle', event => {
        let click = $(event.currentTarget).parent().siblings();
        click.toggleClass("shopping-item__checked");

     $('.shopping-list').on('click', '.shopping-item-delete', event => {
        let removeButton = $(event.currentTarget).closest('li');
        removeButton.remove();   
    })
    })
}

$(main)

