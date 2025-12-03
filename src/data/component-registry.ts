
import { dangerbutton, defaultButton, ghostButton, outlinedButton, primaryButton, secondaryButton } from "@/components/button/defaults";
import { articlecard, bgimgage, iconinfo, imagetop, socialProfile, userprofile } from "@/components/card/default";
import { AvailableComponent } from "@/types";

export const COMPONET_REGISTRY: AvailableComponent[] = [

    {
        id: 'button',
        name: 'Button',
        icon: '🔘', 
        category: 'Controls',
        variants: [
            {
                id: defaultButton.props.variant.value, 
                name: defaultButton.props.label,
                defaultProps: { 
                    id: defaultButton.id,
                    style: defaultButton.style,
                    status: defaultButton.status,
                    meta: defaultButton.meta,
                    type: defaultButton.type,
                    config: defaultButton.config,
                    props: defaultButton.props
                

                
                },
                previewImage: '/images/previews/button-default.png', 
            },
            {
                id: outlinedButton.props.variant.value,
                name: outlinedButton.props.label,
                defaultProps: {
                    id: outlinedButton.id,
                    style: outlinedButton.style,
                    status: outlinedButton.status,
                    meta: outlinedButton.meta,
                    type: outlinedButton.type,
                    config: outlinedButton.config,
                    props: outlinedButton.props
                },
                previewImage: '/images/previews/button-outlined.png',
            },
            {
                id: secondaryButton.props.variant.value,
                name: secondaryButton.props.label,
                defaultProps: {
                   id: secondaryButton.id,
                    style: secondaryButton.style,
                    status: secondaryButton.status,
                    meta: secondaryButton.meta,
                    type: secondaryButton.type,
                    config: secondaryButton.config,
                    props: secondaryButton.props
                },
                previewImage: '/images/previews/button-secondary.png',
            },
            {
                id: primaryButton.props.variant.value, 
                name: primaryButton.props.label,
                defaultProps: {
                    id: primaryButton.id,
                    style: primaryButton.style,
                    status: primaryButton.status,
                    meta: primaryButton.meta,
                    type: primaryButton.type,
                    config: primaryButton.config,
                    props: primaryButton.props
                },
                previewImage: '/images/previews/button-primary.png',
            },
            {
                id: ghostButton.props.variant.value,
                name: ghostButton.props.label,
                defaultProps: {
                    id: ghostButton.id,
                    style: ghostButton.style,
                    status: ghostButton.status,
                    meta: ghostButton.meta,
                    type: ghostButton.type,
                    config: ghostButton.config,
                    props: ghostButton.props
                },
                previewImage: '/images/previews/button-ghost.png',
            },
            {

                id: dangerbutton.props.variant.value,
                name: dangerbutton.props.label,
                defaultProps: {
                    id: dangerbutton.id,
                    style: dangerbutton.style,
                    status: dangerbutton.status,
                    meta: dangerbutton.meta,
                    type: dangerbutton.type,
                    config: dangerbutton.config,
                    props: dangerbutton.props,
                },
                previewImage: '/images/previews/button-danger.png',
            },
        ],


    },
    {
        id:'card',
        name:"Card",
         icon: '📦',
         category:'Latout',
         variants: [
            {
                id: imagetop.variant.value,
                name: `Card: ${imagetop.variant.value}`,

                defaultProps: {
                    id: imagetop.id,
                    type:"Card",
                    status: imagetop.status,
                    variant: imagetop.variant,
                    props: imagetop.props,
                    style: imagetop.style,
                    config: imagetop.config,
                    meta: imagetop.meta || {}
                },
                previewImage: '/images/previews/card-imagetop.png',
            },
            {
                id: bgimgage.variant.value,
                name: `Card: ${bgimgage.variant.value}`,
                defaultProps: {
                    id: bgimgage.id,
                    type: "Card",
                    status: bgimgage.status,
                    props: bgimgage.props,
                    style: bgimgage.style,
                    config: bgimgage.config,
                    variant: bgimgage.variant,
                    meta: bgimgage.meta,
                },
                previewImage: '/images/previews/card-bgimage.png',
            },
            {
                id: userprofile.variant.value,
                name: `Card ${userprofile.variant.value}`,
                 defaultProps: {
                    id: userprofile.id,
                    type:"Card",
                    status: userprofile.status,
                    variant: userprofile.variant,
                    props: userprofile.props,
                    style: userprofile.style,
                    config: userprofile.config,
                    meta : userprofile.meta || {}
                },
                previewImage: '/images/previews/card-userprofile.png',
            },
            {
                id: iconinfo.variant.value,
                name: `Card: ${iconinfo.props.title}`,
                defaultProps: {
                    id: iconinfo.id,
                    type: "Card",
                    variant: iconinfo.variant,
                    status: iconinfo.status,
                    props: iconinfo.props,
                    style: iconinfo.style,
                    config: iconinfo.config,
                    meta: iconinfo.meta || {}
                },
                previewImage: '/images/previews/card-iconinfo.png',
            },
            {
                id: socialProfile.variant.value,
                name: `Card: ${socialProfile.variant.value}`,
                defaultProps: {
                    id: socialProfile.id,
                    type: "Card",
                    status: socialProfile.status,
                    variant: socialProfile.variant,
                    props: socialProfile.props,
                    style: socialProfile.style,
                    config: socialProfile.config,
                    meta: socialProfile.meta || {}
                },
                previewImage: '/images/previews/card-socialprofile.png',
            },
            {
                id: articlecard.variant.value,
                name: `Card: ${articlecard.variant.value}`,
                defaultProps: {
                    id: articlecard.id,
                    type: "Card",
                    status: articlecard.status,
                    variant: articlecard.variant,
                    props: articlecard.props,
                    style: articlecard.style,
                    config: articlecard.config,
                    meta: articlecard.meta || {}
                },
                previewImage: '/images/previews/card-articlecard.png',
            },
         ]

    },
    
];