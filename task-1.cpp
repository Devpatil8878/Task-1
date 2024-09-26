#include <iostream>
#include <vector>
using namespace std;

int main(){
    int m, n;
    cout<<"Enter size of array: ";
    cin>>m>>n;
    int max = INT32_MIN;
    int maxIndM, maxIndN = -1;
    vector<vector<int>> arr(m, vector<int>(n));

    cout<<"Now the elements: ";

    for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            cin>>arr[i][j];
            if(max < arr[i][j]){
                max = arr[i][j];
                maxIndM = i, maxIndN = j; 
            }
        }
    }

    for(int i=0; i<m; i++){
        for(int j=0; j<arr[i].size(); j++){
            cout<<arr[i][j]<<" ";
        }
        cout<<endl;
    }

    cout<<"Max element is: "<<max<<endl;

    if(maxIndN-1 >= 0)
        cout<<"Left: "<<arr[maxIndM][maxIndN-1]<<endl;
    else   
        cout<<"No left element!"<<endl;

    if(maxIndN+1 < n)
        cout<<"Right: "<<arr[maxIndM][maxIndN+1]<<endl;
    else   
        cout<<"No Right element!"<<endl;

    return 0;
}