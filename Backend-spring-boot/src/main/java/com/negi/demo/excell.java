package com.negi.demo;

public class excell {
public static int missingNumber(int[]a, int n) {
	int sum=0;
	int all=0;
	for(int i=0;i<a.length; i++) {
		sum+=a[i];
		
	}
	for(int j=1; j<=n; j++) {
		all+=j;
	}
	return all-sum;
}

//Online IDE - Code Editor, Compiler, Interpreter

 public static int secondLargest(int[]a){
	 
     int fmax=0;
     int smax=0;
     int k=0;
     for(int i=0; i<a.length; i++){
    	
         if(a[i]>fmax){
             fmax=a[i];
             k=i;
         }
         if(a[i]>smax) {
 	 
         }
     }
     return smax;
 }

	public static void main(String[] args) {
		int[] ab= {6,2,8,3,4,7,10,5,9,11,12,13,14};
		System.out.println(missingNumber(ab, ab.length+1));
	     int Arr[] = {12, 35, 1, 10, 34, 1};
	      System.out.println(secondLargest(Arr));

	}

}
