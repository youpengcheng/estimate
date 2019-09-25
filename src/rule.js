let outputComment =(tag,sumScore)=>{

    console.log("sssssssssssssssss"+tag);
    
switch (parseInt(tag) ) {
    case 1:

        if(sumScore<=10){

            return  `投资人对校区的管控亟待加强，建议立刻找御书思学进行校区评估`
            
            }else if(10<sumScore&&sumScore<=20){
            
                return  `投资人对校区的管控还有很大的提升空间，建议立刻找御书思学进行校区评估`
            
            }else if(20<sumScore&&sumScore<=28){
            
                return `投资人对校区的管控比较到位，如果想继续提升业绩请找御书思学进行校区评估`
            
            }else if(28<sumScore&&sumScore<=35){
                return `投资人对校区的管控很到位，如果想继续提升业绩请找御书思学进行校区评估`
            }
        break;
        case 2:
        
                if(sumScore<=10){

                    return  `投资人对校区的管控亟待加强，建议立刻找御书思学进行校区评估`
                    
                    }else if(10<sumScore&&sumScore<=20){
                    
                        return  `投资人对校区的管控还有很大的提升空间，建议立刻找御书思学进行校区评估`
                    
                    }else if(20<sumScore&&sumScore<=28){
                    
                        return `投资人对校区的管控比较到位，如果想继续提升业绩请找御书思学进行校区评估`
                    
                    }else if(28<sumScore&&sumScore<=35){
                    
                        return `投资人对校区的管控很到位，如果想继续提升业绩请找御书思学进行校区评估`
        
                    }

            break;

            case 3:

                if(sumScore<=25){

                    return  `校长对校区的管理工作亟待加强，建议立刻找御书思学进行校区评估`
                    
                    }else if(25<sumScore&&sumScore<=32){
                    
                        return  `校长对校区的管理工作还有很大的提升空间，建议立刻找御书思学进行校区评估`
                    
                    }else if(32<sumScore&&sumScore<=39){
                    
                        return `39个是：校长对校区的管理工作比较到位，如果想继续提升业绩请找御书思学进行校区评估`
                    
                    }else if(40<sumScore&&sumScore<=48){
                    
                        return `48个是：校长对校区的管理工作很到位，如果想继续提升业绩请找御书思学进行校区评估`
        
                    }

                break;

                case 4:

                        if(sumScore<=18){
        
                            return  `教师日常工作亟待加强，建议立刻找御书思学进行校区评估`
                            
                            }else if(19<sumScore&&sumScore<=25){
                            
                                return  `教师日常工作还有很大的提升空间，建议立刻找御书思学进行校区评估`
                            
                            }else if(26<sumScore&&sumScore<=31){
                            
                                return `教师日常工作比较到位，如果想继续提升业绩请找御书思学进行校区评估`
                            
                            }else if(32<sumScore&&sumScore<=38){
                            
                                return `教师日常工作很到位，如果想继续提升业绩请找御书思学进行校区评估`
                
                            }
                        break;

                        case 5:

                                if(sumScore<=10){
                
                                    return  `学管师日常工作亟待加强，建议立刻找御书思学进行校区评估`
                                    
                                    }else if(10<sumScore&&sumScore<=20){
                                    
                                        return  `20个是：学管师日常工作还有很大的提升空间，建议立刻找御书思学进行校区评估`
                                    
                                    }else if(20<sumScore&&sumScore<=28){
                                    
                                        return `28个是：学管师日常工作比较到位，如果想继续提升业绩请找御书思学进行校区评估`
                                    
                                    }else if(28<sumScore&&sumScore<=34){
                                    
                                        return `34个是：学管师日常工作很到位，如果想继续提升业绩请找御书思学进行校区评估`
                        
                                    }
                                break;

                                case 6:

                                        if(sumScore<=18){
                        
                                            return  `咨询师日常工作亟待加强，建议立刻找御书思学进行校区评估`
                                            
                                            }else if(18<sumScore&&sumScore<=25){
                                            
                                                return  `咨询师日常工作还有很大的提升空间，建议立刻找御书思学进行校区评估`
                                            
                                            }else if(25<sumScore&&sumScore<=31){
                                            
                                                return `咨询师日常工作比较到位，如果想继续提升业绩请找御书思学进行校区评估`
                                            
                                            }else if(31<sumScore&&sumScore<=40){
                                            
                                                return `咨询师日常工作很到位，如果想继续提升业绩请找御书思学进行校区评估`
                                
                                            }
                                        break;


        
    default:
        break;
}


}




 
export default {
	outputComment
}