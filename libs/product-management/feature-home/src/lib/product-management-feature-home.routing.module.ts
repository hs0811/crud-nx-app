import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes : Routes =[
    {
        path:'products',
        loadChildren:() => import('../../../feature-product/src/lib/product-management-product-features.module').then((m)=> m.ProductManagementProductFeaturesModule)
    },
    {
        path:'',
        redirectTo:'products',
        pathMatch:"full"
    },
]

@NgModule(
    {
        imports:[
            CommonModule,
            RouterModule.forChild(routes)
        ],
        exports: [RouterModule]
    }
)


export class ProductManagementFeatureHomeRoutingModule {
}
