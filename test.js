//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";
var fn = "Akshay";
var ln = "k";
const d = new Date();
var date = ReactDOM.render(
  <div>
    <p className="colori" contentEditable="true" spellCheck="false">
      Contry
    </p>
    <div>
      <img
        className="sizei"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAllBMVEX/aCAEajj/////YwgAZS0HA40AAIsAAIgAAIMAAIYAAH8AAIEAAHv19foEAI0AAHrY2Or7+/7q6vTT0+dVVKfy8fnh4e5sa7C+vttiYaxmZa6DgrzIyODDw96wr9OlpNB6ebdbWqlPTqQ/Pp1xcLO2ttaRkMNFRJ8hH5SXlsUUEpCgn8s0MpqJib8SDpOpqdAsKphOTKgOf8qvAAAFUklEQVR4nO2ba1fqOBSGnczQpOmFXugFGqAgFQEF/f9/bnYKnuNy64fzJXHG91nLLNLqWuFxd++kae/uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP6Qv8FH7gT4CJxwvoOTpBweumbRdA9DmfgejPgGTrKHpzCUUgZBQG0YPj1kvofk10m+flQySCe/SQOpHk+511F5dfIgZTpqCCZSKSUnwSgolfLBpxWPTobAGpnI8Ol5r1dVXa30/vkplDZaZDD4G5g3J8lMkRFKIocqEclSiFKIJX2qDpRayIqaeUu3vpxkKcVDoJqNzIUZj6zG1ohcbhpFVmTqK9l6cjLYIJH35dhpx4hY2yZpxyPlvbSh4un68eNkRUrSYCGKyvaKMUT68URh26oQC0q2qVp5GZ0XJzZKgiDqbsEh5rZ5/fXJHu0iyiqeIsWHk9IqeUxsSNRjJGzsxXOmn2Rju6uamiJ5tFJKD+Pz4CQJrJL62mmsjoMNh5B+hoM931xP1VZK4KH6eHCypa+aJrc6U8+oMdTkiqZpM1uCZlddg0hSkrd1P0D3TlYhFeGIkms3djdUaRKdi0pXItcUFe14/dizVUQlOXSfZ507yWnyKhfWR761E/gionYyiEIXYpjQ0aj4da5bSJrSOp/mO3fyTKua/fVjcrZff7GgrDITdVyLWXPtiuJcXX9lTyuhZ9dDdO0kCVMqJsW1U4c0VS2mS7HWeanLXK/FckrnsvCWgQsqUWnoOs26dnKgMNmJYn390mVMC51GilK3RptWl0JSqCzjawUu1oXYUaAcHI/RtZMzlRJbay+7MVba6YUySiPUfBkt50o0lE0u03GCX+wu1DZUpM6Ox+jYSamokqT2U/W6sFZO02cSUd4fKU6O9yXpeZ6e6HjR7MeUklKVcj1xc+ykkxP5dhdtiBqy0ummimaDynQWDbOo2unOxkh0m9XnJ/qLzu0gHTs5pu9qa7KZ0hW00H0bZ8qERmVx22taGe6mm1951Sblo9tBunVSKSrEiVne6o5ow2hX9fHQd505mq7rh5j6Udi+/f7SJFSOVeV0lG6dmHCsIslqvjlcty2aSLVDnL2U/WtfvmTxsFTRwkZSXp7m80s1VqrQOB2lWycXqsTjDJW0bPW5WZei3MZ99nSSMpDy9JT18ZaOXXZHvV+N0hJaHsmL01G6dUIpdqLf/unJMNNa7duseznZ226TVJ1e+qzdK623w1tCMXriOsm6dWJnYO9vE+XD/KhUV8rrFk8qy05F5/nwfokzjLM8l7h1sgl+z9TzqqhLY5aZMb287XjJ3hjqG1MX1ZsXKjzBxuko3TqZkZOiXK2716NUkY61jujyOd4HNyfB62M4HotjrcLJ/e60MjU5mTkdpfc4MSxOlsaUPyhOkE84n9ad+mfXnS/nJ+sv5yf5/31+gnksB+udT6B1cfj1urj+Yl386HaQuH/CwX02zje6H2t+6P1Y3Lf/BOzvfAL2ATnjfvH83X6x+rBfrN7tF89/xn6xWKk/eq7Aw/NbeP6Eg+eUOHiejYPnHjl4PpaD56g5eN6eg/cyOHh/h/Nd3/PyOSy8D8jBe6Mc704E3i/+LwAnnLt/wEfu/gIfgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4IQDJxw44cAJB044cMKBEw6ccOCEAyccOOHACQdOOHDCgRMOnHDghAMnHDjhwAkHTjhwwoETDpxw4ITzL675QprvfCfbAAAAAElFTkSuQmCC"
        alt=""
      />
      <img
        className="sizei"
        src="https://media.assettype.com/freepressjournal/2025-02-03/dmtd8han/D0VpnBRUwAEhfby.jpeg"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);
