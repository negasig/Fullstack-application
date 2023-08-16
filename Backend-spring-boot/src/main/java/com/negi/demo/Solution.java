
package com.negi.demo;

import java.util.Arrays;

public class Solution {
    public static  int[] solution(String[] arr){
        int[] nne=new int[3];

                for (int i=0; i<arr.length-1; i++) {
                	
                		for (int j=0; j<=arr.length-1; j++) {
  
                		    
                    if(arr[i].charAt(j)==arr[i+1].charAt(j)){
                    
                        nne[0]=i;
                        nne[1]=i+1;
                        nne[2]=j;
                    
                    }

                }
            
        }
        return nne;
    }
    public static void main(String args[]){
       
        String[] arr={"alc","aio","deg"};
        String[] arr1={"aic","pik","dsc"};
        String[] arr2={"apl","ish","ahk"};
        //String[] arr2={"pec","bne","bca"};
        System.out.println(Arrays.toString(solution(arr)));
        System.out.println(Arrays.toString(solution(arr1)));
        System.out.println(Arrays.toString(solution(arr2)));
    }
}