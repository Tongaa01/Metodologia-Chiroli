import {create} from 'zustand'
import {IProduct} from '../types/IProduct.ts'

interface IProductStore {
    products: IProduct[];
    activeProduct: IProduct | null;
    setActiveProduct: (product: IProduct) => void;
    addProduct: (product: IProduct) => void;
    clearActiveProduct: () => void;
    updateProduct: (product: IProduct) => void;
    removeProduct: (id: string | number) => void;
}

export const store = create<IProductStore>((set)=>({
    products: [],
    activeProduct: null,
    setActiveProduct: (product: IProduct) => set({activeProduct: product}),
    addProduct: (product: IProduct) => set((state) => ({products: [...state.products, product]})),
    clearActiveProduct: () => set({activeProduct: null}),
    updateProduct: (product: IProduct) => set((state) => ({products: state.products.map((p) => p.id === product.id ? product : p)})),
    removeProduct: (id: string | number) => set((state) => ({products: state.products.filter((p) => p.id !== id)}))
}))