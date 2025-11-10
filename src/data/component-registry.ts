import { dangerbutton, defaultButton, ghostButton, outlinedButton, primaryButton, secondaryButton } from "@/components/button/defaults";
import { articlecard, bgimgage, iconinfo, imagetop, socialProfile, userprofile } from "@/components/card/default";
import { centerHero } from "@/components/hero/defaults";
import { AvailableComponent } from "@/types";

export const COMPONET_REGISTRY: AvailableComponent[] = [

    {
        id: 'button',
        name: 'Button',
        icon: '🔘', 
        category: 'Controls',
        variants: [
            {
                id: defaultButton.id, 
                name: defaultButton.props.label,
                defaultProps: { 
                    ...defaultButton.props,
                    style: defaultButton.style,
                    config: defaultButton.config,
                },
                previewImage: '/images/previews/button-default.png', 
            },
            {
                id: outlinedButton.id,
                name: outlinedButton.props.label,
                defaultProps: {
                    ...outlinedButton.props,
                    style: outlinedButton.style,
                    config: outlinedButton.config,
                },
                previewImage: '/images/previews/button-outlined.png',
            },
            {
                id: secondaryButton.id,
                name: secondaryButton.props.label,
                defaultProps: {
                    ...secondaryButton.props,
                    style: secondaryButton.style,
                    config: secondaryButton.config,
                },
                previewImage: '/images/previews/button-secondary.png',
            },
            {
                id: primaryButton.id === secondaryButton.id ? 'btn-primary' : primaryButton.id, 
                name: primaryButton.props.label,
                defaultProps: {
                    ...primaryButton.props,
                    style: primaryButton.style,
                    config: primaryButton.config,
                },
                previewImage: '/images/previews/button-primary.png',
            },
            {
                id: ghostButton.id,
                name: ghostButton.props.label,
                defaultProps: {
                    ...ghostButton.props,
                    style: ghostButton.style,
                    config: ghostButton.config,
                },
                previewImage: '/images/previews/button-ghost.png',
            },
            {

                id: dangerbutton.id === ghostButton.id ? 'btn-danger' : dangerbutton.id,
                name: dangerbutton.props.label,
                defaultProps: {
                    ...dangerbutton.props,
                    style: dangerbutton.style,
                    config: dangerbutton.config,
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
                id: imagetop.id,
                name: `Card: ${imagetop.variant.value}`,

                defaultProps: {
                    props: imagetop.props,
                    style: imagetop.style,
                    config: imagetop.style,
                    variant: imagetop.variant,
                    status: imagetop.status,
                },
                previewImage: '/images/previews/card-imagetop.png',
            },
            {
                id: bgimgage.id,
                name: `Card: ${bgimgage.variant.value}`,
                defaultProps: {
                    props: bgimgage.props,
                    style: bgimgage.style,
                    config: bgimgage.config,
                    variant: bgimgage.variant,
                    status: bgimgage.status
                },
                previewImage: '/images/previews/card-bgimage.png',
            },
            {
                id: userprofile.id,
                name: `Card ${userprofile.variant.value}`,
                 defaultProps: {
                    props: userprofile.props,
                    style: userprofile.style,
                    config: userprofile.config,
                    variant: userprofile.variant,
                    status: userprofile.status,
                },
                previewImage: '/images/previews/card-userprofile.png',
            },
            {
                id: iconinfo.id,
                name: `Card: ${iconinfo.props.title}`,
                defaultProps: {
                    props: iconinfo.props,
                    style: iconinfo.style,
                    config: iconinfo.config,
                    variant: iconinfo.variant,
                    status: iconinfo.status,
                },
                previewImage: '/images/previews/card-iconinfo.png',
            },
            {
                id: socialProfile.id,
                name: `Card: ${socialProfile.variant.value}`,
                defaultProps: {
                    props: socialProfile.props,
                    style: socialProfile.style,
                    config: socialProfile.config,
                    variant: socialProfile.variant,
                    status: socialProfile.status,
                },
                previewImage: '/images/previews/card-socialprofile.png',
            },
            {
                id: articlecard.id,
                name: `Card: ${articlecard.variant.value}`,
                defaultProps: {
                    props: articlecard.props,
                    style: articlecard.style,
                    config: articlecard.config,
                    variant: articlecard.variant,
                    status: articlecard.status,
                },
                previewImage: '/images/previews/card-articlecard.png',
            },
         ]

    },
    {
        id:'Hero',
        name:'Hero',
         icon: '📦',
         category:'Latout',
         variants: [
            {
                id: 'one',
                name : `${centerHero.id}`,
                defaultProps :{
                    porps:centerHero.props,
                    style: centerHero.props,
                    config: centerHero.props,
                    variant: centerHero.variant,
                    status: centerHero.isPublished

                }
            }
         ]
    }
];