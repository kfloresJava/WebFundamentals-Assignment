function oprs(element)
{
  if(element.innerText=="Login")
  {
      element.innerText="Logout";
  }
  else
  {
    element.innerText="Login";
  }
}
function removex(element)
{
  element.remove();
}