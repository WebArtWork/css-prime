import type { Preset } from '@wawjs/css-prime-themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@wawjs/css-prime-themes/aura/accordion';
import autocomplete from '@wawjs/css-prime-themes/aura/autocomplete';
import avatar from '@wawjs/css-prime-themes/aura/avatar';
import badge from '@wawjs/css-prime-themes/aura/badge';
import base from '@wawjs/css-prime-themes/aura/base';
import blockui from '@wawjs/css-prime-themes/aura/blockui';
import breadcrumb from '@wawjs/css-prime-themes/aura/breadcrumb';
import button from '@wawjs/css-prime-themes/aura/button';
import card from '@wawjs/css-prime-themes/aura/card';
import carousel from '@wawjs/css-prime-themes/aura/carousel';
import cascadeselect from '@wawjs/css-prime-themes/aura/cascadeselect';
import checkbox from '@wawjs/css-prime-themes/aura/checkbox';
import chip from '@wawjs/css-prime-themes/aura/chip';
import colorpicker from '@wawjs/css-prime-themes/aura/colorpicker';
import confirmdialog from '@wawjs/css-prime-themes/aura/confirmdialog';
import confirmpopup from '@wawjs/css-prime-themes/aura/confirmpopup';
import contextmenu from '@wawjs/css-prime-themes/aura/contextmenu';
import css from '@wawjs/css-prime-themes/aura/css';
import datatable from '@wawjs/css-prime-themes/aura/datatable';
import dataview from '@wawjs/css-prime-themes/aura/dataview';
import datepicker from '@wawjs/css-prime-themes/aura/datepicker';
import dialog from '@wawjs/css-prime-themes/aura/dialog';
import divider from '@wawjs/css-prime-themes/aura/divider';
import dock from '@wawjs/css-prime-themes/aura/dock';
import drawer from '@wawjs/css-prime-themes/aura/drawer';
import editor from '@wawjs/css-prime-themes/aura/editor';
import fieldset from '@wawjs/css-prime-themes/aura/fieldset';
import fileupload from '@wawjs/css-prime-themes/aura/fileupload';
import floatlabel from '@wawjs/css-prime-themes/aura/floatlabel';
import galleria from '@wawjs/css-prime-themes/aura/galleria';
import iconfield from '@wawjs/css-prime-themes/aura/iconfield';
import iftalabel from '@wawjs/css-prime-themes/aura/iftalabel';
import image from '@wawjs/css-prime-themes/aura/image';
import imagecompare from '@wawjs/css-prime-themes/aura/imagecompare';
import inlinemessage from '@wawjs/css-prime-themes/aura/inlinemessage';
import inplace from '@wawjs/css-prime-themes/aura/inplace';
import inputchips from '@wawjs/css-prime-themes/aura/inputchips';
import inputgroup from '@wawjs/css-prime-themes/aura/inputgroup';
import inputnumber from '@wawjs/css-prime-themes/aura/inputnumber';
import inputotp from '@wawjs/css-prime-themes/aura/inputotp';
import inputtext from '@wawjs/css-prime-themes/aura/inputtext';
import knob from '@wawjs/css-prime-themes/aura/knob';
import listbox from '@wawjs/css-prime-themes/aura/listbox';
import megamenu from '@wawjs/css-prime-themes/aura/megamenu';
import menu from '@wawjs/css-prime-themes/aura/menu';
import menubar from '@wawjs/css-prime-themes/aura/menubar';
import message from '@wawjs/css-prime-themes/aura/message';
import metergroup from '@wawjs/css-prime-themes/aura/metergroup';
import multiselect from '@wawjs/css-prime-themes/aura/multiselect';
import orderlist from '@wawjs/css-prime-themes/aura/orderlist';
import organizationchart from '@wawjs/css-prime-themes/aura/organizationchart';
import overlaybadge from '@wawjs/css-prime-themes/aura/overlaybadge';
import paginator from '@wawjs/css-prime-themes/aura/paginator';
import panel from '@wawjs/css-prime-themes/aura/panel';
import panelmenu from '@wawjs/css-prime-themes/aura/panelmenu';
import password from '@wawjs/css-prime-themes/aura/password';
import picklist from '@wawjs/css-prime-themes/aura/picklist';
import popover from '@wawjs/css-prime-themes/aura/popover';
import progressbar from '@wawjs/css-prime-themes/aura/progressbar';
import progressspinner from '@wawjs/css-prime-themes/aura/progressspinner';
import radiobutton from '@wawjs/css-prime-themes/aura/radiobutton';
import rating from '@wawjs/css-prime-themes/aura/rating';
import ripple from '@wawjs/css-prime-themes/aura/ripple';
import scrollpanel from '@wawjs/css-prime-themes/aura/scrollpanel';
import select from '@wawjs/css-prime-themes/aura/select';
import selectbutton from '@wawjs/css-prime-themes/aura/selectbutton';
import skeleton from '@wawjs/css-prime-themes/aura/skeleton';
import slider from '@wawjs/css-prime-themes/aura/slider';
import speeddial from '@wawjs/css-prime-themes/aura/speeddial';
import splitbutton from '@wawjs/css-prime-themes/aura/splitbutton';
import splitter from '@wawjs/css-prime-themes/aura/splitter';
import stepper from '@wawjs/css-prime-themes/aura/stepper';
import steps from '@wawjs/css-prime-themes/aura/steps';
import tabmenu from '@wawjs/css-prime-themes/aura/tabmenu';
import tabs from '@wawjs/css-prime-themes/aura/tabs';
import tabview from '@wawjs/css-prime-themes/aura/tabview';
import tag from '@wawjs/css-prime-themes/aura/tag';
import terminal from '@wawjs/css-prime-themes/aura/terminal';
import textarea from '@wawjs/css-prime-themes/aura/textarea';
import tieredmenu from '@wawjs/css-prime-themes/aura/tieredmenu';
import timeline from '@wawjs/css-prime-themes/aura/timeline';
import toast from '@wawjs/css-prime-themes/aura/toast';
import togglebutton from '@wawjs/css-prime-themes/aura/togglebutton';
import toggleswitch from '@wawjs/css-prime-themes/aura/toggleswitch';
import toolbar from '@wawjs/css-prime-themes/aura/toolbar';
import tooltip from '@wawjs/css-prime-themes/aura/tooltip';
import tree from '@wawjs/css-prime-themes/aura/tree';
import treeselect from '@wawjs/css-prime-themes/aura/treeselect';
import treetable from '@wawjs/css-prime-themes/aura/treetable';
import virtualscroller from '@wawjs/css-prime-themes/aura/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        datatable,
        dataview,
        datepicker,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        floatlabel,
        galleria,
        iconfield,
        iftalabel,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        paginator,
        panel,
        panelmenu,
        password,
        picklist,
        popover,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitbutton,
        splitter,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        tag,
        terminal,
        textarea,
        tieredmenu,
        timeline,
        toast,
        togglebutton,
        toggleswitch,
        toolbar,
        tooltip,
        tree,
        treeselect,
        treetable,
        virtualscroller
    },
    css
} satisfies Preset<AuraBaseDesignTokens>;
