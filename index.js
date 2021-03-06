/**
 * formの送信時に実行する関数。
 * input form の入力内容を取得してそれをTODOリストに加える
 */
function handleFormSubmit() {
  const input = document.getElementById("task-input");
  const inputValue = input.value; // 厳密には instanceof で input要素であるかのチェックを入れるべき
  if (!inputValue.length > 0) {
    alert("テキストを入力してください。");
    return;
  }

  const todosEl = document.getElementById("todos");
  const todoEl = createTodoElement(inputValue);
  todosEl.appendChild(todoEl);
  input.value = ""; // input のリセット
}

/**
 * TODO要素を作る関数
 * @param {*} inputValue TODO文字列
 * @returns TODO要素
 */
function createTodoElement(inputValue) {
  // TODO要素を作る
  const todoEl = document.createElement("li");

  // checkbox要素を作る
  const checkBoxEl = document.createElement("input");
  todoEl.appendChild(checkBoxEl);
    // label要素を作る
  const labelEl = document.createElement("label");
  labelEl.innerText = inputValue;
    // checkbox要素を作る
  checkBoxEl.type = "checkbox";
  checkBoxEl.onchange = function (e) {
    const checked = e.target.checked;
    if (checked) {
      todoEl.className = `checked`;
    } else {
      todoEl.className = "";
    }
  };
  todoEl.appendChild(labelEl);
 // ボタン要素を作る
  const buttonEl = document.createElement("button");
  buttonEl.innerText = "削除";
  buttonEl.onclick = function () {
    todoEl.remove();
  };
  todoEl.appendChild(buttonEl);

  return todoEl;
}