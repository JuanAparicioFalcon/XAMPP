<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '|lwjHhG$nR_Z763gpE`b26QChd^O%>WTheH+v!;%D`{$-4MnTqUBLmLG2pHS,9>Z' );
define( 'SECURE_AUTH_KEY',  '.1Y@e(p;9j:J[)[GRn5vw9EA1MakjDEwKzqvmAYn@:x>L>Gz8x8}d}Y[mW(=M4e/' );
define( 'LOGGED_IN_KEY',    'I_2cdu;`}R:1.`a}x^nZ&XL;rezKRFFB*wQq9Hn6H%gX4:jDC=C{y{,@4oWm)5l|' );
define( 'NONCE_KEY',        'rS1zKnDE46vX@u]FFrVh[2Z=Js7)Nn+n6T>`|`62(0bQh*#FY!^m[gu16RcjSu>S' );
define( 'AUTH_SALT',        '(2Em!jS<WFRzHQ^1Yw.{/Zp^?I0X#LJ0VTb2(zh591w!o:],IbrR-lirjy<bb=bX' );
define( 'SECURE_AUTH_SALT', 'FbxdELmO92U`X,ca5vZ c$&^A00W>o7d<U4Z;1,FcY,`nfd(ZPep3!$#SA`Q)_4d' );
define( 'LOGGED_IN_SALT',   '*?]n:S,bFA+.-Mv|ztznIoC]k{u%B;=M0S/^R&U;o>pp`Gn0s>s81GK=gh%.LWw;' );
define( 'NONCE_SALT',       '9b4+P[kz=_tV2sZ69n>g)%):JM:,[Kg{QV4(HnWAbnPd|SolB@Xmo YQjk|=|n4f' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
