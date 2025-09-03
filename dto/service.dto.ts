export interface CreateServiceDTO {
  companyId: number;
  name: string;
  description: string;
  price: number;
}

export interface ServiceResponseDTO {
  id: number;
  companyId: number;
  name: string;
  description: string;
  price: number;
}
