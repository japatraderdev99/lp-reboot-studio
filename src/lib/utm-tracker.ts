export function getHotmartUrlWithParams(baseUrl: string): string {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Captura os parâmetros UTM
  const utmSource = urlParams.get("utm_source") || "";
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  const utmTerm = urlParams.get("utm_term") || "";
  const utmContent = urlParams.get("utm_content") || "";
  
  // Cria o parâmetro sck no formato da Hotmart
  const sckParam = `${utmSource}|${utmMedium}|${utmCampaign}|${utmTerm}|${utmContent}`;
  
  // Adiciona os parâmetros à URL base
  const separator = baseUrl.includes("?") ? "&" : "?";
  let finalUrl = baseUrl;
  
  // Adiciona todos os parâmetros da URL atual se existirem
  if (urlParams.toString()) {
    finalUrl += separator + urlParams.toString();
  }
  
  // Adiciona o parâmetro sck se houver parâmetros na URL
  if (urlParams.toString()) {
    finalUrl += `&sck=${sckParam}`;
  }
  
  return finalUrl;
}
