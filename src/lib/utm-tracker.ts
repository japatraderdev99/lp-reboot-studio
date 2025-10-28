export function getKiwifyUrlWithParams(baseUrl: string): string {
  const currentUrl = window.location.href;
  const urlParams = new URLSearchParams(window.location.search);
  
  // Captura os parâmetros UTM
  const utmSource = urlParams.get("utm_source") || "";
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  const utmTerm = urlParams.get("utm_term") || "";
  const utmContent = urlParams.get("utm_content") || "";
  
  // Cria o parâmetro sck no formato da Kiwify
  const sckParam = `${utmSource}|${utmMedium}|${utmCampaign}|${utmTerm}|${utmContent}`;
  
  // Adiciona os parâmetros à URL base
  const separator = baseUrl.includes("?") ? "&" : "?";
  let finalUrl = baseUrl;
  
  // Adiciona todos os parâmetros da URL atual
  if (urlParams.toString()) {
    finalUrl += separator + urlParams.toString();
  }
  
  // Adiciona o parâmetro sck se houver UTMs
  if (currentUrl.includes("?")) {
    finalUrl += `&sck=${sckParam}`;
  }
  
  return finalUrl;
}
