export interface ItemTypes {
  id: number
  nombre: string
  descripcion: string
  linkImagen: string
  precio: string
  tasaIva: string
  vendible: number
  created_at: string
  stockRequerido?: number
  borrado?: number
}
