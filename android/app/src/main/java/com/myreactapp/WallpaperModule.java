// WallpaperModule.java

package com.myreactapp;

import android.app.WallpaperManager;
import android.app.WallpaperManager;
import android.graphics.Bitmap;
import android.graphics.Canvas;
import android.graphics.PixelFormat;
import android.graphics.drawable.Drawable;
import android.util.Base64;
import android.graphics.BitmapFactory;
import android.widget.Toast;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;
import java.util.Map;
import java.util.HashMap;
import java.io.IOException;

public class WallpaperModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;
  public static String test(String string) {
      return string;
  }
//  static String s = '哈哈哈哈';
  public WallpaperModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
      return "WallpaperModule";
  }

//   @ReactMethod
//   public String show() {
//     // WallpaperManager wallpaperManager = WallpaperManager.getInstance(this);
//     // Drawable wallpaperDrawable = wallpaperManager.getDesiredMinimumHeight()
//     return '123456';
//   }
    @ReactMethod(isBlockingSynchronousMethod = true)
    public String getHomeWallpaper() {
      WallpaperManager wallpaperManager = WallpaperManager.getInstance(getReactApplicationContext());
      Drawable drawable = wallpaperManager.getDrawable();
      int width = drawable.getIntrinsicWidth();// 取drawable的长宽
      int height = drawable.getIntrinsicHeight();
      Bitmap.Config config = drawable.getOpacity() != PixelFormat.OPAQUE ?Bitmap.Config.ARGB_8888:Bitmap.Config.RGB_565;// 取drawable的颜色格式
      Bitmap bitmap = Bitmap.createBitmap(width, height, config);// 建立对应bitmap
      Canvas canvas = new Canvas(bitmap);// 建立对应bitmap的画布
      drawable.setBounds(0, 0, width, height);
      drawable.draw(canvas);// 把drawable内容画到画布中
      // bitmap
      ByteArrayOutputStream bos=new ByteArrayOutputStream();
      bitmap.compress(Bitmap.CompressFormat.JPEG, 40, bos);//参数100表示不压缩
      byte[] bytes=bos.toByteArray();
      return Base64.encodeToString(bytes, Base64.DEFAULT);
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public void setHomeWallpaper(String Path) throws IOException {
      WallpaperManager wallpaperManager = WallpaperManager.getInstance(getReactApplicationContext());
      Bitmap bitmap = BitmapFactory.decodeFile(Path);
      if (bitmap == null) {
      Toast.makeText(getReactApplicationContext(), "图片不存在" + Path, Toast.LENGTH_SHORT).show();
      return;
      }
      wallpaperManager.setBitmap(bitmap);
    }
}