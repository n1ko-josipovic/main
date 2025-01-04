function randomIntFromInterval(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function createSnowflake()
{
  const svgContainer = document.getElementById('snowContainer');

  const xPos = randomIntFromInterval(0, window.innerWidth - 1);
  const size = randomIntFromInterval(5, 10);
  const delay = randomIntFromInterval(0, 10);
  const duration = randomIntFromInterval(5, 10);
  const opacity = randomIntFromInterval(1, 10)

  const snowflake = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  snowflake.setAttribute("r", size);
  snowflake.setAttribute("cx", xPos);
  snowflake.setAttribute("cy", -size);
  snowflake.setAttribute("fill", "white");
  snowflake.setAttribute("opacity", opacity / 10);
  snowflake.setAttribute("class", "snowflake");


  snowflake.style.animationDelay = `${delay}s`;
  snowflake.style.animationDuration = `${duration + 5}s`;
  snowflake.style.animationTimingFunction = "linear";

  svgContainer.appendChild(snowflake);
}

function generateSnowflakes()
{
  const numSnowflakes = 50;
  for (let i = 0; i < numSnowflakes; i++)
  {
    createSnowflake();
  }
}

window.onload = function ()
{
  generateSnowflakes();
};
